define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("itaFacebookApp.sectionHeader", "sectionHeader", "sectionHeaderController");
        kony.application.registerMaster({
            "namespace": "itaFacebookApp",
            "classname": "sectionHeader",
            "name": "itaFacebookApp.sectionHeader"
        });
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("profileScreen", "profileScreen", "profileScreenController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});