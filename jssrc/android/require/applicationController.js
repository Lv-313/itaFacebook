define({
    AS_AppEvents_c9cbdd8252d846ef896d10cd92f4c577: function AS_AppEvents_c9cbdd8252d846ef896d10cd92f4c577(eventobject) {
        var self = this;
        return appservicereq.call(this, eventobject);
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("itaFacebookApp.sectionHeader", "sectionHeader", "sectionHeaderController");
        kony.application.registerMaster({
            "namespace": "itaFacebookApp",
            "classname": "sectionHeader",
            "name": "itaFacebookApp.sectionHeader"
        });
        kony.mvc.registry.add("flxContactInfo", "flxContactInfo", "flxContactInfoController");
        kony.mvc.registry.add("flxInfo", "flxInfo", "flxInfoController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("homeScreen", "homeScreen", "homeScreenController");
        kony.mvc.registry.add("profileScreen", "profileScreen", "profileScreenController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});