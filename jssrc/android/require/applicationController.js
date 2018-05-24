define({
    AS_AppEvents_c9cbdd8252d846ef896d10cd92f4c577: function AS_AppEvents_c9cbdd8252d846ef896d10cd92f4c577(eventobject) {
        var self = this;
        return appservicereq.call(this, eventobject);
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("itaFacebookApp.sectionFooter.footerSection", "footerSection", "footerSectionController");
        kony.application.registerMaster({
            "namespace": "itaFacebookApp.sectionFooter",
            "classname": "footerSection",
            "name": "itaFacebookApp.sectionFooter.footerSection"
        });
        kony.mvc.registry.add("itaFacebookApp.sectionHeader", "sectionHeader", "sectionHeaderController");
        kony.application.registerMaster({
            "namespace": "itaFacebookApp",
            "classname": "sectionHeader",
            "name": "itaFacebookApp.sectionHeader"
        });
        kony.mvc.registry.add("ListView.AlertsWithThumbnails", "AlertsWithThumbnails", "AlertsWithThumbnailsController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "AlertsWithThumbnails",
            "name": "ListView.AlertsWithThumbnails"
        });
        kony.mvc.registry.add("flxContactInfo", "flxContactInfo", "flxContactInfoController");
        kony.mvc.registry.add("segGeneralInfo", "segGeneralInfo", "segGeneralInfoController");
        kony.mvc.registry.add("flxInfo", "flxInfo", "flxInfoController");
        kony.mvc.registry.add("rowFlxCountseg", "rowFlxCountseg", "rowFlxCountsegController");
        kony.mvc.registry.add("datacontainer", "datacontainer", "datacontainerController");
        kony.mvc.registry.add("CopyflxRow1", "CopyflxRow1", "CopyflxRow1Controller");
        kony.mvc.registry.add("friendPage", "friendPage", "friendPageController");
        kony.mvc.registry.add("FriendsScreen", "FriendsScreen", "FriendsScreenController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "Form1Controller");
        kony.mvc.registry.add("profileScreen", "profileScreen", "profileScreenController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("friendPage").navigate();
    }
});