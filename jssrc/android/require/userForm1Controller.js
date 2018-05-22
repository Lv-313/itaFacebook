define({
    login: function() {
        let ids = kony.sdk.getCurrentInstance().getIdentityService('ITAKonyAuth');
        ids.login({
            UseDeviceBrowser: true,
            success_url: 'itademo://com.softserve.itademo'
        }, function(response) {
            alert('Success\n\n' + JSON.stringify(response));
        }, function() {
            alert('Fuck');
        });
    },
    loginSuccess: function(response) {
        var navObj = new kony.mvc.Navigation("profileScreen");
        navObj.navigate();
    },
    logout: function() {
        let ids = kony.sdk.getCurrentInstance().getIdentityService('ITAKonyAuth');
        ids.logout(function() {
            alert('Success');
        }, function() {
            alert('Fuck');
        });
    },
    showProfile: function() {
        let ids = kony.sdk.getCurrentInstance().getIdentityService('ITAKonyAuth');
        ids.getProfile(false, function(response) {
            alert('User profile is  :' + JSON.stringify(response));
        }, function(error) {
            alert('Failed to fetch profile : ' + JSON.stringify(error));
        });
    }
});