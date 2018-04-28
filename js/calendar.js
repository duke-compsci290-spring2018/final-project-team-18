
////
////function response() {
////    console.log(this);
////    var data = JSON.parse(this.responseText);
////    alert(data.netid);
////}
////
////var request = new XMLHttpRequest();
////
////request.onload = response;
////request.open("GET","https://streamer.oit.duke.edu/ldap/people?q="+"dae19"+"&access_token="+"c3dd4a27986a5c57453e21a6666ec1ed",true);
////request.send();
//// console.log(this);
////    var data = JSON.parse(this.responseText);
////    request.send();
////    alert(data.netid);
//
//var access_token = "c3dd4a27986a5c57453e21a6666ec1ed";
//var query = "jpo3";
//
//function response() {
//    
//    var data = JSON.parse(this.responseText);
//    console.log(data);
//}


function response(){
     console.log(this);
    var data = JSON.parse(this.responseText);
    alert(data.netid);
}


function getdata(){
    console.log("start");
    var access_token = "c3dd4a27986a5c57453e21a6666ec1ed";
    var query = "jpo3";
    var request = new XMLHttpRequest();
    request.onload = response;
    request.open("GET","https://streamer.oit.duke.edu/ldap/people?q="+query+"&access_token="+access_token,true);
    
    request.send();
    
}