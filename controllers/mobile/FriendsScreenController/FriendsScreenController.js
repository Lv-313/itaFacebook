define({ 

 fillListFriends: function() {
  var segmentFriends = this.view.flxScrContListFr.segListFr;
 
  var data = [{
    friendsId: 45,
    imgUrl: "fdbdfb",
    numeFriend: 'gyttttytytegegeg'
  },
  {
    friendsId: 46,
    imgUrl: "gertrttrt",
    numeFriend: 'gegege555555g'
  },
  {
    friendsId: 43,
    imgUrl: "gergegeg",
    numeFriend: 'gegegeg'
  }];
 
  segmentFriends.widgetDataMap = {
    fullName: "numeFriend",
    imgFriend: "imgUrl",
    IdFr: "friendsId"
  };
 
  segmentFriends.setData(data);
 },
  
  openFriend: function(response){
    var navBack = new kony.mvc.Navigation("friendPage");
    navBack.navigate();
}
  
});