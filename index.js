const wdio = require("webdriverio");

// Chromedriver to be used is 26.03, Ass mentioned in the link: https://github.com/headspinio/appium-lg-webos-driver#:~:text=remote%20Chromium%20debugging.-,appium%3AchromedriverExecutable,-%5BOptional%5D%20Most%20LG
const opts = {
    // path: '/wd/hub',
    port: 4723,
    capabilities: {
        "platformName": "LGTV",
        "appium:automationName" : "webOS",
        "appium:deviceName" : "tv2",
        "appium:deviceHost" : "192.168.0.174",
        "appium:chromedriverExecutable" : "/Users/kushagravarade/Downloads/chromedriver", // Path to your chromedriver
        "appium:appId" : "com.robustets.app",
        "appium:rcMode" : "js",
    }
  };

let client 

async function remoteAction(){
  client = await wdio.remote(opts)
  await client.executeScript('webos: pressKey', [{key: 'right', duration: 200}])
}

console.log("Chalega")
remoteAction()
