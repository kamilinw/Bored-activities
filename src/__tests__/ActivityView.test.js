/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
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
  };
  const activityLiked = (liked) => console.log(liked);
  const activityView = render(
    <ActivityView activityObject={activity} setIsLiked={activityLiked} />
  );

  const activityDescription = await activityView.findByTestId(
    "activity_description"
  );
  expect(activityDescription.innerHTML).toContain(activity.activity);
});
