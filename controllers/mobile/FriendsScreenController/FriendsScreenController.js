define({ 

 fillListFriends: function() {
  var segmentFriends = this.view.flxScrContListFr.segListFriends;
 
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
    lblFullNameFr: "numeFriend",
    imgProfile: "imgUrl",
    FrId: "friendsId"
  };
 
  segmentFriends.setData(data);
 }
  
});