/*function change(){
	url=document.getElementById("abn").getAttribute("href");
	window.location=url;
	
}*/
function dsearch(){
	x=document.forms[0].emp_search.value;	
  if (isNaN(x))
	{
	document.getElementById("atn").innerHTML="Type ID Like('1'/'2'/..)";
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
function idsearch(){
	x=document.forms[0].employee_id.value;
	//alert(x);	
  if (isNaN(x))
	{
	document.getElementById("atn").innerHTML="Type ID Like('1'/'2'/..)";
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


function empsearch(){
	//x=document.forms[0].emptype.value;
	alert("it works!");	
  /*if (isNaN(x))
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
	} */
   
} 