function check_submit(){
	a=document.forms[0].area.value;
	b=document.forms[0].STOVE.value;
	c=document.forms[0].quant.value;
	d=document.forms[0].USAGE.value;
	e=document.forms[0].PRICE.value;
	f=document.forms[0].MISCELLANEOUS.value;
	g=document.forms[0].tot.value;
	if(a!="" && b!="" && c!="" && d!="" && e!="" && f!="" && g!="" )
	{
		document.forms[0].submit();
	}
	else{
		alert("INCOMPLETE FORM");
	}

}  
/*function password1(el){
	a=el.value.length;
	//alert(a);
	//l=document.myform.uname.value.length;
	//l=document.getElementById("un").value.length;
	if(a<5){
		document.getElementById("sidemsg").innerHTML=" too short";
		document.getElementById("sidemsg").style.color="red";
		
	}
	else if(a>=5 && a<8)
	{
	document.getElementById("sidemsg").innerHTML=" Medium Strength";
	document.getElementById("sidemsg").style.color="green";
	
	}	
	else 
	{
	document.getElementById("sidemsg").innerHTML=" Good Strength";
	document.getElementById("sidemsg").style.color="black";
	
	}
}*/