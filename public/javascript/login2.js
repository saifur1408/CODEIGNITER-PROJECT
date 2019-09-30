function editSub(){
	x=document.forms[0].iname.value;
	y=document.forms[0].ipass.value;
	 if(x=="" || y=="" )
	{
	alert("FIELD EMPTY!");
    }
	else
	{ 
	document.frm.submit();
	//document.forms[0].submit();	
	}
} 
function usermail(){
	x=document.forms[0].iname.value;
	atpos = x.indexOf("@");
    dotpos = x.lastIndexOf(".");
	
  if (x=="")
	{
	document.getElementById("unam").innerHTML="USERNAME MUST BE GIVEN";
	document.getElementById("unam").style.color="red";
	}
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
       document.getElementById("unam").innerHTML="INVALID USERNAME";
	   document.getElementById("unam").style.color="red";
	 }
    else
	{
	   document.getElementById("unam").innerHTML="VALID";
	   document.getElementById("unam").style.color="black";
	}	 
}
