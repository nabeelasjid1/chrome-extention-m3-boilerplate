# Chrome extension boilerplate(extendable for Edge/Opera/Firefox/Brave).

## Prerequisites

- yarn 1.22.10
- node v16.1.0

### Build

#### For Local Development

#### For Chromium Development Build

```
yarn
yarn dev:chromium
```

#### For Other Development Build (Edge/Opera/Firefox/Brave))

- create a new file with name firefox.webpack.js and copy paste same chromium.webpack.js, then change browser property to "firefox" or your other browser, booooom it will work like charm.
- finally add a new script in packages.json file as below.

```
yarn
yarn dev:firefox
```

#### For Production Release

```
use same script from packages.json file except use build script e.g, build:chromium
```

## features:

> 1. Support for all browsers extentions.
> 2. Popup page with reactjs and material ui framework.
> 3. Content script helpers.
> 5. Bundling (webpack).
> 6. Some (useful) services e.g. DbService, messagePassing, chromeService and helper functions(helpers).
> 7. Some (useful) react components e.g. FrameMUI.js (To mount react mui component in iframe in content script).
> 8. Some (useful) react helper demonstrations e.g. added demonstration herlpers in popup js to intract with background and content scripts.
> 9. Comes with React 18(alpha release). you can downgrade it to 17.* but not lower than that. 

## directory structure

> - `src/` is root directory for a chrome extension. it includes `manifest.json` file and other static stuff.

> - `src/background.js` is main background js file for the chrome extension.

> - `src/components` is the directory which includes react js components.

> - `src/pages/popup-page` is the directory which includes react js setup for popup page.

> - `src/pages/option-page` is the directory which includes react js setup for option pages.

> - `src/content-scripts` is the directory which includes react js setup for content script.

> - `src/services` is the directory for services that can be written in es6,es7 or es8...

> - `src/services/helpers/..` is the directory for helpers of content script and background

## How to extend ?

> - Write extension's background scripts code in `src/background.js`

> - Write extension's react components in `src/components/` directory.

> - Write extension's popup page codes in `src/pages/popup-page/` directory.

> - Write extension's option page codes in `src/pages/option-page` directory.

> - Write extension's content scripts codes in `src/pages/content-scripts` directory.

> - Write extension's services codes in `src/services` directory.

> - Write extension's content script and background herlps codes in `src/services/helpers/..` directory.