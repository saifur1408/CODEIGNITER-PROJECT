/*function change(){
	url=document.getElementById("abn").getAttribute("href");
	window.location=url;
	
}*/
function dsearch(){
	x=document.forms[0].symptom_name.value;	
  if (!isNaN(x))
	{
	document.getElementById("atn").innerHTML="Type 'HEART'/'EYE'/....";
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
function idsearch(){
	x=document.forms[0].d_id.value;
	//alert(x);	
  if (isNaN(x))
	{
	document.getElementById("atn").innerHTML="Type EMP.ID Like('1'/'2'/..)";
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
		/*document.frm.action="appointment_done.php";
		//alert("edit pressed");

	document.frm.submit();*/
	window.location="user/take_appointment";
}