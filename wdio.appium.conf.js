exports.config = {
    host: '127.0.0.1',
    port: 4723,

    specs: [
        './test/specs/*.js'
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
    
    sync: true,
    logLevel: 'debug',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    deprecationWarnings: true,
    
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
    
    framework: 'jasmine',

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

};
