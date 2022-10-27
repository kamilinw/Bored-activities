/**
 * @jest-environment jsdom
 */
import { expect, test, jest } from "@jest/globals";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActivityView from "../components/ActivityView";

test("Displays valid activity", async () => {
  const activity = {
    activity: "Random activity",
    type: "recreational",
    participants: 1,
    price: 0,
    link: "",
    key: "123456",
    accessibility: 0,
    isLiked: false,
  };
  const activityLiked = (liked) => console.log(liked);
  const activityView = render(
    <ActivityView activityObject={activity} setIsLiked={activityLiked} />
  );

  const activityDescription = await activityView.findByTestId(
    "activity_description"
  );
  expect(activityView.queryByTestId("information_icon")).toBeNull();
  expect(activityView.getByTestId("heart_outlined_icon")).toBeDefined();
  expect(activityDescription.innerHTML).toContain(activity.activity);
});

test("Displays error when activity not found", async () => {
  const activity = { error: "No activity found with the specified parameters" };
  const activityView = render(<ActivityView activityObject={activity} />);

  const errorActivity = await activityView.findByTestId(
    "error_fetching_activity"
  );
  expect(errorActivity).toBeTruthy();
});

test("Opens information link on click when link given", async () => {
  const spyWindowOpen = jest.spyOn(window, "open");
  spyWindowOpen.mockImplementation(jest.fn());

  const activity = {
    activity: "Random activity",
    type: "recreational",
    participants: 1,
    price: 0,
    link: "https://en.wikipedia.org/wiki/Touch_typing",
    key: "123456",
    accessibility: 0,
  };
  const activityView = render(<ActivityView activityObject={activity} />);

  const infoIcon = await activityView.findByTestId("information_icon");
  expect(infoIcon).toBeTruthy();
  await userEvent.click(infoIcon);
  await userEvent.keyboard("[Enter]");
  await userEvent.keyboard("other");

  expect(spyWindowOpen).toHaveBeenCalledTimes(2);
  spyWindowOpen.mockRestore();
});

test("Displays filled heart icon when favourite activity", async () => {
  const activity = {
    activity: "Random activity",
    type: "recreational",
    participants: 1,
    price: 0,
    link: "https://en.wikipedia.org/wiki/Touch_typing",
    key: "123456",
    accessibility: 0,
    isLiked: true,
  };

  const activityView = render(<ActivityView activityObject={activity} />);

  const heartFilledIcon = await activityView.findByTestId("heart_filled_icon");
  expect(heartFilledIcon).toBeTruthy();
});

test("Trigger setIsLike function on click when activity is not favourite", async () => {
  const activity = {
    activity: "Random activity",
    type: "recreational",
    participants: 1,
    price: 0,
    link: "",
    key: "123456",
    accessibility: 0,
    isLiked: false,
  };
  const setIsLikedMock = jest.fn();

  const activityView = render(
    <ActivityView activityObject={activity} setIsLiked={setIsLikedMock} />
  );

  const heartFilledIcon = await activityView.findByTestId(
    "heart_outlined_icon"
  );
  await userEvent.click(heartFilledIcon);
  await userEvent.keyboard("[Enter]");
  await userEvent.keyboard("other");

  expect(setIsLikedMock).toHaveBeenCalledTimes(2);
});

test("Trigger setIsLike function on click when activity is favourite", async () => {
  const activity = {
    activity: "Random activity",
    type: "recreational",
    participants: 1,
    price: 0,
    link: "",
    key: "123456",
    accessibility: 0,
    isLiked: true,
  };
  const setIsLikedMock = jest.fn();

  const activityView = render(
    <ActivityView activityObject={activity} setIsLiked={setIsLikedMock} />
  );

  const heartFilledIcon = await activityView.findByTestId("heart_filled_icon");
  await userEvent.click(heartFilledIcon);
  await userEvent.keyboard("[Enter]");
  await userEvent.keyboard("other");

  expect(setIsLikedMock).toHaveBeenCalledTimes(2);
});
