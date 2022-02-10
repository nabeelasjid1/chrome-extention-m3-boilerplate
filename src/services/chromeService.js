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

const sendMessageToActiveTab = async (payload, callback) => {
  const tab = await this.getActiveTab();
  chrome.tabs.sendMessage(tab.id, payload, callback);
  return true;
};

const openHelpPage = (path = "home", data = "") => {
  const helpUrl = `${chrome.runtime.getURL(
    "option.html"
  )}?path=${path}&url=${data}`;
  chrome.tabs.create({ url: helpUrl }, () => {});
};

const createContextMenu = (opts) => {
  return chrome.contextMenus.create(opts);
};

export {
  getActiveTab,
  sendMessageToActiveTab,
  openHelpPage,
  createContextMenu,
};
