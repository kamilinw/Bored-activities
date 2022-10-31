import { Slider, Switch, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

const ActivityForm = ({ onSubmit }) => {
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(1);
  const [participantsEnabled, setParticipantsEnabled] = useState("");
  const [price, setPrice] = useState([0, 100]);
  const [priceEnabled, setPriceEnabled] = useState(false);
  const [accessibility, setAccessibility] = useState([0, 100]);
  const [accessibilityEnabled, setAccessibilityEnabled] = useState(false);

  const types = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const priceMarks = {
    0: "free",
    50: "cheap",
    100: "expensive",
  };

  const accessibilityMarks = {
    0: "easy",
    50: "medium",
    100: "hard",
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  const makeParams = () => {
    let urlParams = {};
    if (priceEnabled) {
      urlParams.minprice = price[0] / 100;
      urlParams.maxprice = price[1] / 100;
    }

    if (accessibilityEnabled) {
      urlParams.minaccessibility = accessibility[0] / 100;
      urlParams.maxaccessibility = accessibility[1] / 100;
    }

    if (participantsEnabled) {
      urlParams.participants = participants;
    }
    urlParams.type = type ? type : "";
    return new URLSearchParams(urlParams);
  };

  return (
    <section className="activity-form">
      <form onSubmit={onSubmitForm}>
        <label htmlFor="type">Type:</label>
        <br />
        <Select
          className="activity-input"
          onChange={(option) => setType(option)}
          allowClear
        >
          {types.map((type, id) => (
            <Option key={id} value={type}>
              {type}
            </Option>
          ))}
        </Select>
        <br />
        <label htmlFor="participants">Participants:</label>
        <div className="user-input">
          <Switch
            className="switch"
            size="small"
            checked={participantsEnabled}
            onChange={(checked) => setParticipantsEnabled(checked)}
          />
          <Slider
            className="slider"
            defaultValue={participants}
            min={1}
            max={8}
            disabled={!participantsEnabled}
            onChange={(participants) => setParticipants(participants)}
          />
        </div>
        <label htmlFor="price">Price:</label>
        <div className="user-input">
          <Switch
            size="small"
            checked={priceEnabled}
            onChange={(checked) => setPriceEnabled(checked)}
          />
          <Slider
            className="slider"
            range
            marks={priceMarks}
            defaultValue={[price[0], price[1]]}
            disabled={!priceEnabled}
            onChange={([min, max]) => {
              setPrice([min, max]);
            }}
          />
        </div>
        <label htmlFor="accessibility">Accessibility:</label>
        <div className="user-input">
          <Switch
            size="small"
            checked={accessibilityEnabled}
            onChange={(checked) => setAccessibilityEnabled(checked)}
          />
          <Slider
            className="slider"
            range
            marks={accessibilityMarks}
            defaultValue={[accessibility[0], accessibility[1]]}
            disabled={!accessibilityEnabled}
            onChange={([min, max]) => {
              setAccessibility([min, max]);
            }}
          />
        </div>
        <br />

        <Button
          type="primary"
          data-testid="submit_form_button"
          block
          onClick={() => onSubmit(makeParams())}
        >
          Search for activity
        </Button>
      </form>
    </section>
  );
};

export default ActivityForm;
