/*function change(){
	url=document.getElementById("abn").getAttribute("href");
	window.location=url;
	
}*/
function dsearch(){
	x=document.forms[0].dname.value;	
  if (!isNaN(x))
	{
	document.getElementById("atn").innerHTML="Type Your SYMPTOMS";
	document.getElementById("atn").style.color="red";
	//flag=false;
	}
	else
	{
	document.getElementById("atn").innerHTML="";
	document.getElementById("atn").style.color="white";
	//flag=false;	
	} 
   
} 
function editSub(){
		document.frm.action="appointment_done.php";
		//alert("edit pressed");

	document.frm.submit();
}