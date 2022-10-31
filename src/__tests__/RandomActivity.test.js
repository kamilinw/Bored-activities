/**
 * @jest-environment jsdom
 */
import { expect, test, jest } from "@jest/globals";
import { render } from "@testing-library/react";
import mockFetch from "../mocks/mockFetch";
import userEvent from "@testing-library/user-event";
import RandomActivity from "../pages/random_activity/RandomActivity";
import { getKeysFromLocalStorage } from "../utils/LocalStorage";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Fetch activity on first render", async () => {
  const randomActivity = render(<RandomActivity />);
  const activityView = await randomActivity.findByTestId("activity-view");
  expect(activityView.innerHTML).toContain("Mocked activity");
});

test("Error on fetching activity", async () => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      ok: false,
      status: 400,
      json: () =>
        Promise.reject({ success: false, message: "Something bad happened" }),
    })
  );
  const randomActivity = render(<RandomActivity />);
  const activityError = await randomActivity.findByTestId(
    "error_fetching_activity"
  );
  expect(activityError.innerHTML).toContain("Something bad happened");
});

test("Add to favourites when click on like button", async () => {
  const randomActivity = render(<RandomActivity />);
  const heatrIcon = await randomActivity.findByTestId("heart_outlined_icon");
  await userEvent.click(heatrIcon);
  const activityKeys = getKeysFromLocalStorage();
  expect(activityKeys).toContain("123456");
  localStorage.removeItem("123456");
});

test("Request activity on click 'Search for activity' button", async () => {
  const randomActivity = render(<RandomActivity />);
  const submitButton = await randomActivity.findByTestId("submit_form_button");
  const activityView = await randomActivity.findByTestId("activity-view");
  await userEvent.click(submitButton);
  expect(activityView.innerHTML).toContain("Mocked activity");
});
