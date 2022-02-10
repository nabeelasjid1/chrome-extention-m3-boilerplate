import * as Callbacks from "./services/helpers/background";

chrome.runtime.onMessage.addListener((req, sender, res) => {
  try {
    Callbacks[req.callback](req.payload);
  } catch (e) {
    console.log(e);
  }
  return true;
});
