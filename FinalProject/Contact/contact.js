
function clearComments(formObj){
    if (formObj.value == "Please enter your comments"){
       formObj.value = "";
    }
 }
 
 
 function bringBackComment(formObj){
    if (formObj.value == ""){
       formObj.value = "Please enter your comments";
    }
 }

 
 function firstLoad(formObj){
    formObj.fname.focus();
 }



function validate(formObj){
    var alertsStr = "";
    var focusNum = 0;
    if (formObj.firstName.value == "") {
       alertsStr += "You must enter a first name \n";
       formObj.firstName.focus();
       focusNum = 1;
    }
    if (formObj.lastName.value == "") {
       alertsStr += "You must enter a last name \n";
       if (focusNum == 0){
          formObj.lastName.focus();
          focusNum = 1;
       }
    }
 
    if (formObj.email.value == "") {
       alertsStr += "You must enter a email \n";
       if (focusNum == 0){
          formObj.title.focus();
          focusNum = 1;
       }
    }
 
    if (formObj.message.value == "" || formObj.message.value == "Please enter your comments"){
       alertsStr += "You must enter a comment\n";
       if (focusNum == 0){
          formObj.comments.focus();
          focusNum = 1;
       }
    }
    
 
 
    if (alertsStr != ""){
       alert(alertsStr);
       return false;
    }
    alert("Success!");
    return true;
}