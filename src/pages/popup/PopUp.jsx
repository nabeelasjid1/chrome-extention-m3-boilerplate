import React from "react";
import { Switch } from "@material-ui/core";
import {
  sendMessageToScripts,
  sendMessageToBackground,
} from "../../services/messagePassing";
const PopUp = () => {
  const handleChange = (e) => {
    sendMessageToScripts({}, "updateTitle");
    sendMessageToBackground({ power: e.target.checked }, "extensionStatus");
  };
  return (
    <>
      <h1>Extention state</h1>
      <Switch
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </>
  );
};

export default PopUp;
