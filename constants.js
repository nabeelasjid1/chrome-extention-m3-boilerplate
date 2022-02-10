const { generateGuid } = require("./src/services/utils");
const constants = {
  appConfig: {
    appName: "EXTENSION_NAME",
    urls: {
      chrome: "CHROME_STORE_URL",
    },
    // put extension key here if required which would only be used in development mode
    key: "SSH_PUBLIC_KEY", // gather it from extension store
  },
  contentScript: {
    mountId: generateGuid(),
  },
  support: {
    donate: "https://www.kiwaitech.com/donate",
    howToVideoLink: "TUTORIAL_LINK",
    uninstallFeedbackForm: "HTTPS://FEEDBACK_FORM_LINK",
  },
};

module.exports = constants;
