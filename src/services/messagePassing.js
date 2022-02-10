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

const sendMessageToBackground = (payload, callback) => {
  const data = { payload, callback };
  chrome.runtime.sendMessage(data);
};

const sendMessageToScripts = async (payload, callback) => {
  try {
    const data = { payload, callback };
    const tab = await getActiveTab();
    chrome.tabs.sendMessage(tab.id, data);
  } catch (e) {
    console.log(e);
  }
  return true;
};

const sendMessageToTab = async (id, payload, callback) => {
  const data = { payload, callback };
  try {
    chrome.tabs.sendMessage(id, data);
  } catch (e) {
    console.log(e);
  }
  return true;
};

export {
  getActiveTab,
  sendMessageToBackground,
  sendMessageToScripts,
  sendMessageToTab,
};
