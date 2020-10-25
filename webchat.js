var id;
var inchat=true;


$(document).ready(function () {
    $('#sendText').click(sendText);
    $('#checkText').click(sendText);

    var input = document.getElementById("textinput");
    // Respond to enter key
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        sendText();
      }
    });

    setInterval(function(){ checkMessage(); }, 1000);

    id=makeid(10);
    console.log("ID:",id);

});


function makeid(length) {

   var result = "";
   while (result===""){
     result = prompt("Please Enter Your username","Michael Jordan");
   }


   return result;

}
/*
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
*/
// Function to force scrollable window at bottom
function updateScroll(){
    var element = document.getElementById("chatBox");
    element.scrollTop = element.scrollHeight;
}


 // Respond to send button
function sendText() {
  if (inchat===true){
  console.log("sendText");
  // Get the text from the text box
  inText = $('#textinput').val();
  // Clear the input text
  $('#textinput').val("");
  inputFlag=0;

  message=inText.replace("","+");
  $.ajax(
    {
    type: "get",
    url: "/cgi-bin/team1_webchat.py?message=" + message + "&id="+id,
    dataType: "text",
    success:  processResults,
    error: function(request, ajaxOptions, thrownError)
    {
        $("#debug").text("error with get:"+request+thrownError);
    }
  });
}
}
// Respond to send button
function checkMessage() {
 if (inchat===true){
 inText = ""; //start inText as empty

 message=inText.replace("","+");
 $.ajax(
   {
   type: "get",
   url: "/cgi-bin/team1_webchat.py?message=" + message + "&id="+id,
   dataType: "text",
   success:  processResults,
   error: function(request, ajaxOptions, thrownError)
   {
       $("#debug").text("error with get:"+request+thrownError);
   }
 });
}
}
function processResults(data) {
  // add to the bottom of the chat box
  if(data.length > 1){
    updateScroll();
    console.log("got:"+data);
    $('#chatBox').append(data);
  }
}

function leavechat(){
  inchat=false;

}
