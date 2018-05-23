define({

 login: function() {
   var self = this;
   let ids = kony.sdk.getCurrentInstance().getIdentityService('ITAKonyAuth');
   this.setBrowserVisibility(true);
   let browser = this.view.browser;
   ids.login({
     browserWidget: browser,
     success_url: 'itafacebook://com.orgname.itaFacebook'
   }, function(response) {
     self.setBrowserVisibility(false);
     alert('Success\n\n' + JSON.stringify(response));
   }, function(error) {
     self.setBrowserVisibility(false);
     alert('Failure\n\n' + JSON.stringify(error));
   });
 },
  
 loginSuccess:function(response){
  var navObj = new kony.mvc.Navigation("profileScreen");
  navObj.navigate();
},
  
logout: function() {
  var self = this;
  let ids = kony.sdk.getCurrentInstance().getIdentityService('ITAKonyAuth');
  this.setBrowserVisibility(true);
  var browser = this.view.browser;
  ids.logout(function () {
     alert('Success');
   }, function () {
     alert('Fuck');
   }, {browserWidget: browser});
},

showProfile: function () {
 
  let ids = kony.sdk.getCurrentInstance().getIdentityService('ITAKonyAuth');
  ids.getProfile(false,
function(response) {
       alert('User profile is  :' + JSON.stringify(response));
   }, function(error) {
       alert('Failed to fetch profile : ' + JSON.stringify(error));
   });
},
  setBrowserVisibility: function(visible) {
    this.view.browser.setVisibility(visible);
  }
});