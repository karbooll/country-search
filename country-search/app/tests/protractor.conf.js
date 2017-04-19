exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [
        {
            'browserName': 'chrome'
        }
    ],

    allScriptsTimeout: 1000 * 60, // 60 seconds

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1000 * 60 * 5 // 5 minutes
    },

    specs: [
        '*spec*.js'
    ],

    // all tests are run in maximized window
    onPrepare: function () {
        browser.manage().window().maximize();
    },
    
};