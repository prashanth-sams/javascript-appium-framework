exports.config = {
    host: '127.0.0.1',
    port: 4723, // default appium port

    specs: [
        './test/specs/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        maxInstances: 1,
        browserName: 'android',
        appiumVersion : '1.15.0',
        deviceName : 'emulator-5554',
        platformVersion : '9.0',
        platformName : 'android',
        waitforTimeout: 30 * 60000,
        commandTimeout: 30 * 60000,
        app: './app/Android-NativeDemoApp-0.2.1.apk',
    }],
    framework: 'jasmine',

    // capabilities: [
    //     {
    //       maxInstances: 1,
    //       browserName: 'safari',
    //       appiumVersion : '1.7.2',
    //       deviceName : 'iPhone 6',
    //       platformVersion : '11.2',
    //       platformName : 'iOS'
    //     },
    //     {
    //       maxInstances: 1,
    //       browserName: 'chrome',
    //       appiumVersion : '1.7.2',
    //       deviceName : 'Pixel XL API 27',
    //       platformVersion : '8.1.0',
    //       platformName : 'android'
    //     }
    // ],
    
    sync: true,
    logLevel: 'debug',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    deprecationWarnings: true,
    
    // bail: 0,
    // baseUrl: 'http://localhost',
    // services: ['selenium-standalone','appium'],
    services: ['appium'],
    appium: {
        args: {
            address: '127.0.0.1',
            commandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true
        },
        logPath : "./",
    },
    
    // framework: 'jasmine',

    // reporters: ['allure','spec'],
    // reporterOptions: {
    //     allure: {
    //         outputDir: './allure-results/'
    //     }
    // },

    // reporters: ['spec'],


    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 999999
    // },
    
    // afterTest: function (test) {
    //     // if test passed, ignore, else take and save screenshot.
    //     if (test.passed) {
    //         return;
    //     }
    //     // get current test title and clean it, to use it as file name
    //     var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
    //     // build file path
    //     var filePath = this.screenshotPath + filename + '.png';
    //     // save screenshot
    //     browser.saveScreenshot(filePath);
    //     console.log('\n\tScreenshot location:', filePath, '\n');
    // },

};
