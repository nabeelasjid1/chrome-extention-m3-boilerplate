import * as Callbacks from "../services/helpers/contentScript";
import { print } from "../services/utils";
print("Content script works!");

chrome.runtime.onMessage.addListener((req) => {
  try {
    Callbacks[req.callback](req.payload);
  } catch (e) {
    console.log(e);
  }
  return true;
});
