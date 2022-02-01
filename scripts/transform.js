const constants = require("../constants");
const pkg = require("../package.json");
// options: webpack configs
const manifestTransform = (content, path, options) => {
  const { mode, browser } = options;
  const modify = (buffer) => {
    // copy-webpack-plugin passes a buffer
    const manifest = JSON.parse(buffer.toString());
    // make any modifications you like, such as
    if (mode === "development") {
      // manifest["content_security_policy"] = "script-src 'self' 'unsafe-eval'; object-src 'self'";
      // manifest.key = constants.appConfig.key;
    }
    manifest.version = pkg.version;
    manifest.action.default_title = constants.appConfig.appName;
    // pretty print to JSON with two spaces
    return JSON.stringify(manifest, null, 2);
  };
  return modify(content);
};

module.exports = {
  manifestTransform,
};
