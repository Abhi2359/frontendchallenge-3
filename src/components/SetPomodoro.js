import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
            <h3>Settings</h3>
        <div className="input-wrapper">
          <div class="pomodoro">
            <label for="pomodoro">pomodoro</label>
            <div>
              <input
                className="input"
                type="number"
                name="work"
                onChange={handleChange}
                value={newTimer.work}
              />
            </div>
          </div>
      <div class="shortbreak">
        <label for="short Break">shortBreak</label>
        <div>

          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
        </div>
      </div>
      <div class="longBreak">
        <label for="longBreak">longBreak</label>
        <div>

          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
      </div>
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
