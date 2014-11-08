// 1. create an object that will call the server, a request
// 2. Deal with any response

// 1: Create the request  <=== unecessary with jQuery
// var myRequest = new XMLHttpRequest();


// 2: prepare to deal with the response by creating an event handler for our request to call back
$(document).ready(function() {

  $.getJSON('https://api.github.com/users/fab9', function(info) {
    console.log('this is info: ' + info.name);
    console.log('this is links: ' + links);
    console.log('this is links.children' + links.children);
    console.log('this is links.firstChild' + links.firstChild);

    var s = links.firstChild;

    var output='';
    console.log(s = output);
    for (var i = 0; i <= info.length-1; i++) {
      for (key in info.links[i]) {
        if (info.links[i].hasOwnProperty(key)) {
          output += '<li>' + info.links[i][key] + '</li>';
        }
      }
    }




  }); //getJSON
    // $(#links).html(output);
}); //ready
// =========================
// myRequest.onreadystatechange = function(){
//   console.log("We were called!");
//   console.log(myRequest.readyState);
//   if((myRequest.status === 200) &&
//     (myRequest.readyState === 4)) {

//       // once the response has been received i'll have a responseText property I can use
//       // response comes back as a string and is converted to JSON object when parsed, or translated.
//       var info = JSON.parse(myRequest.responseText);
//       console.log("this is info: " + info.name + info.location);
//       var name = info.name;
//       // $(#update).innerHTML = name;
//   } // end if
// };

// // THEN configure and send
// myRequest.open("GET", "https://api.github.com/users/fab9", true); // true means yes, it is asynchronous. we're not gonna wait for the response before we keep going with other stuff.
// // any parameters?
// myRequest.send(null);

// we're not waiting for the request to come back, we don't want to hang the page so whenever the request
// calls us back we'll jump into the anonymous function ln15
//
// ==================================
// myRequest.open("GET", "https://api.github.com/users/fab9");
// myRequest.onreadystatechange = function (){
//   //monitor the status of the myRequest we're gonna make
//   if((myRequest.status === 200) &&
//     (myRequest.readyState === 4)) {

//       var info = JSON.parse(myRequest.responseText);
//       console.log("this is info" + info);
//       console.log("this is output" + output);

//       var output='';

//       var update = document.getElementById('update');
//       update.innerHTML = output;
//   }//ready
// }//event
// myRequest.send();
//
// ==========================

// $.getJSON('https://api.github.com/users/al_the_x', function(data) {
//   var output = '<ul>';
//   $.each(data, function(key, val) {
//     output += '<li>' + val.name + '</li>';
//   });
//   output +='</ul>';
//   $(#update).html(output); // or .append or .prepend
// });

// ==========================
