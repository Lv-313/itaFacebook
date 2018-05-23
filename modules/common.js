function appservicereq(params) {
 // Launched from other app (ie browser in our case)
 if (params.launchmode == 3) {

   //#ifdef iphone
     // handleDeeplinkCallback() appears to want a separate .code element, whereas
     // the Google call returns this embedded within the URL property.
     var extractedCode = params.launchparams.URL.split("?")[2].slice(5);
     params.launchparams.code = extractedCode;    
   //#endif
   
   // this should process the short lived 'token' passed from the browser and swap it
   // for the backend token
   handleDeeplinkCallback(params);
 }
}