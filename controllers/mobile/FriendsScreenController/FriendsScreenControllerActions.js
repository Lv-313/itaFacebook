define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for BtnHome **/
    AS_Button_c04aa04efce64f32b1b3f2c5d3e6fc93: function AS_Button_c04aa04efce64f32b1b3f2c5d3e6fc93(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("profileScreen");
        ntf.navigate();
    },
    /** onRowClick defined for segListFr **/
    AS_Segment_a095d449c6ca4bf4bd82423e4c57b8fb: function AS_Segment_a095d449c6ca4bf4bd82423e4c57b8fb(eventobject, sectionNumber, rowNumber) {
        var self = this;
        if (get_friendlist_id_members_inputparam == undefined) {
            var get_friendlist_id_members_inputparam = {};
        }
        get_friendlist_id_members_inputparam["serviceID"] = "addListOfFriends$get_friendlist_id_members";
        get_friendlist_id_members_inputparam["friendlist_id"] = self.view.segListFr.selectedItems[0].fullName;
        var get_friendlist_id_members_httpheaders = {};
        get_friendlist_id_members_inputparam["httpheaders"] = get_friendlist_id_members_httpheaders;
        var get_friendlist_id_members_httpconfigs = {};
        get_friendlist_id_members_inputparam["httpconfig"] = get_friendlist_id_members_httpconfigs;
        get_friendlist_id_members = mfintegrationsecureinvokersync(get_friendlist_id_members_inputparam, "addListOfFriends", "get_friendlist_id_members");
    }
});