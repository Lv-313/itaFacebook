//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "itaFacebook",
    appName: "itaFacebook",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.4.54.71",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "itaFacebook",
    isturlbase: "https://app-factory-dev.konycloud.com/services",
    isMFApp: true,
    appKey: "318e91b664180a836951a99932ac4a6d",
    appSecret: "ca86068b6226c1b81118c3b4f1e923c8",
    serviceUrl: "https://100007931.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100007931.auth.konycloud.com/appconfig",
        "identity_meta": {
            "DeliveryBinGoogle": {
                "success_url": "allow_any"
            }
        },
        "service_doc_etag": "000001638D55CEA8",
        "appId": "af90b791-fe56-4321-b675-86657a5f2cc7",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "ITAFacebookApp",
        "reportingsvc": {
            "session": "https://app-factory-dev.konycloud.com/services/IST",
            "custom": "https://app-factory-dev.konycloud.com/services/CMS"
        },
        "baseId": "866a53c4-5fcc-438b-96f5-fec6e911833a",
        "login": [{
            "alias": "ITAKonyAuth",
            "type": "oauth2",
            "prov": "ITAKonyAuth",
            "url": "https://100007931.auth.konycloud.com"
        }, {
            "alias": "DeliveryBinGoogle",
            "type": "oauth2",
            "prov": "DeliveryBinGoogle",
            "url": "https://100007931.auth.konycloud.com"
        }],
        "services_meta": {},
        "Webapp": {
            "url": "https://app-factory-dev.konycloud.com/appMy"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://100007931.auth.konycloud.com/appconfig",
    secureurl: "https://100007931.auth.konycloud.com/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8210
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: applicationController.AS_AppEvents_c9cbdd8252d846ef896d10cd92f4c577,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmLogin");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;