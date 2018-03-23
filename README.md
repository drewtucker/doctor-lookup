## Planning

1. Overview: This program is designed to help users find a doctor near them who can help treat whatever health problems they may have.


2. Configuration/dependencies:
   **Found in package.json**

  * "babel-core": "^6.26.0",
  *  "babel-loader": "^7.1.3",
  * "babel-preset-es2015": "^6.24.1",
  * "clean-webpack-plugin": "^0.1.19",
  * "css-loader": "^0.28.10",
  * "eslint": "^4.18.2",
  * "eslint-loader": "^2.0.0",
  * "html-webpack-plugin": "^3.0.6",
  * "jasmine": "^3.1.0",
  * "jasmine-core": "^2.99.0",
  * "karma": "^2.0.0",
  * "karma-chrome-launcher": "^2.2.0",
  * "karma-cli": "^1.0.1",
  * "karma-jasmine": "^1.1.1",
  * "karma-jasmine-html-reporter": "^0.2.2",
  * "karma-jquery": "^0.2.2",
  * "karma-webpack": "^2.0.13",
  * "style-loader": "^0.20.3",
  * "uglifyjs-webpack-plugin": "^1.2.2",
  * "webpack": "^4.1.1",
  * "webpack-cli": "^2.0.11",
  * "webpack-dev-server": "^3.1.1"

3. Specs:

  * Spec 1: Users will be able to search the Portland area either by Doctor name, or by the medical issue they would like treated. This will return a list of all doctors relevant to the search.

  * Spec 2: If the API call results in an error, the application will return a notification that states what the error was.

  * Spec 3: If the search does not return any doctors, the application will return a notification stating that no doctors were found for those search parameters.
