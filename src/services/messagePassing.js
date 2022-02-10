const getActiveTab = (winId) => {
  const config = { active: true };
  if (winId) {
    config.windowId = winId;
  }
  return new Promise((resolve, reject) => {
    try {
      chrome.tabs.query(config, (tabs) => {
        resolve(tabs[0]);
      });
    } catch (e) {
      reject(e);
    }
  });
};

const sendMessage = (path, payload, callback) => {
  const data = payload;
  data.path = path;
  chrome.runtime.sendMessage(data, callback);
};

const sendMessageToActiveTab = async (path, payload, callback) => {
  payload.path = path;
  try {
    const tab = await this.getActiveTab();
    chrome.tabs.sendMessage(tab.id, payload, callback);
  } catch (e) {
    console.log(e);
  }
  return true;
};

const sendMessageToTab = async (path, id, payload, callback) => {
  payload.path = path;
  try {
    chrome.tabs.sendMessage(id, payload, callback);
  } catch (e) {
    console.log(e);
  }
  return true;
};

const addListener = () => {
  chrome.runtime.onMessage.addListener((req, sender, res) => {
    try {
      res(req);
    } catch (e) {
      console.log(e);
    }
    return true;
  });
};

export {
  getActiveTab,
  sendMessage,
  sendMessageToActiveTab,
  sendMessageToTab,
  addListener,
};
