/*function check_it(){
	if(flag1==true && flag2==true && flag3==true && flag4==true && flag5==true && flag6==true && flag7==true && flag8==true && flag9==true){
		document.myformsaifur.submit();
		//alert("FORM done :)");
	}
	else{
		alert("INCOMPLETE FORM");
	}
} */
/*function check(){
	alert(document.myformsaifur.length);
	str="";
	str1="";
	for(i=0;i<document.myformsaifur.length;i++){
		//str+=document.myformsaifur[i].name;
		//str1+=document.myformsaifur[i].value;
		if(document.myformsaifur[i].name.value.length=0)
		{
			alert(document.myformsaifur[i].name+" is empty");
			//document.myformsaifur[i].name.style="border:1px solid red;";
		}
		
	}
	//alert(str);
	//alert(str1);
//}  */
function password1(el){
	a=el.value.length;
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
}
function first_name(){
	b=document.forms[0].fname.value;
	//alert("hello!");
	if (!isNaN(b))
	{
	  document.getElementById("fnm").innerHTML=" NAME SHOULD BE CHARACTER";
	  document.getElementById("fnm").style.color="red";
	  flag=false;
	}
	else if(b.length > 0 )
	{
	  document.getElementById("fnm").innerHTML="";
	  document.getElementById("fnm").style.color="red";
	  flag1=true;
	}	
}

function doc_id(){
	b=document.forms[0].docid.value;
	alert("DOCTOR ID CAN NOT BE CHANGED!");
    document.forms[0].docid.value=b;	
}


function last_name(){
	b=document.forms[0].lname.value;
	a=document.forms[0].fname.value;
	
	if(a=="")
	{
	document.getElementById("fnm").innerHTML=" FIRST NAME MUST BE GIVEN";
		document.getElementById("fnm").style.color="red";
		flag=false;
	}
	if(b.length > 0)
	{
	  document.getElementById("lnm").innerHTML="";
	  document.getElementById("lnm").style.color="red";
	  flag2=true;
	}
	if (!isNaN(b))
	{
	document.getElementById("lnm").innerHTML=" NAME SHOULD BE CHARACTER";
	document.getElementById("lnm").style.color="red";
	flag=false;
	} 
	
	
}
function age1(){
	a=document.forms[0].fname.value;
	b=document.forms[0].lname.value;
	c=document.forms[0].age.value;
	
	if(a=="")
	{
	  document.getElementById("fnm").innerHTML=" FIRST NAME MUST BE GIVEN";
	  document.getElementById("fnm").style.color="red";
	  flag=false;
	}
	if(b=="")
	{
	  document.getElementById("lnm").innerHTML=" LAST NAME REQUIRED";
	  document.getElementById("lnm").style.color="red";
	  flag=false;
	}
    if(c > 20 && c <=100 )
	{
	  document.getElementById("ag").innerHTML="";
	  document.getElementById("ag").style.color="red";
	  flag3=true;
	}
	else 
	{
	  document.getElementById("ag").innerHTML=" INVALID!";
	  document.getElementById("ag").style.color="red";
	  flag=false;
	}
	
	
}
function confirm1(){
	c=document.getElementById("pass").value.length;
	d=document.getElementById("conpass").value.length;
	
	//alert(c);
	if(c==0)
   {
    document.getElementById("sidemsg").innerHTML="1st Fillup This";
	//document.getElementById("q").innerHTML=" PASSWORD DOES'T MATCH";
	document.getElementById("sidemsg").style.color="red";
	flag=false;
   }
	if(c!=d)
   {
    document.getElementById("q").innerHTML=" PASSWORD DOES'T MATCH";
	document.getElementById("q").style.color="red";
	flag=false;
   }
   if(c!=0 && c==d)
   {
    document.getElementById("q").innerHTML=" PASSWORD MATCHED";
	document.getElementById("q").style.color="black";
	flag4=true;
   }
	else
	{
	document.getElementById("q").innerHTML=" PASSWORD DOES'T MATCH";
	document.getElementById("q").style.color="red";
	flag=false;
	}
}
function qualifi(){
	a=document.forms[0].fname.value;
	b=document.forms[0].lname.value;
	c=document.forms[0].age.value;
	e=document.forms[0].specialist.value;
	
	if(a=="")
	{
	  document.getElementById("fnm").innerHTML=" FIRST NAME MUST BE GIVEN";
	  document.getElementById("fnm").style.color="red";
	  flag=false;
	}
	if(b=="")
	{
	  document.getElementById("lnm").innerHTML=" LAST NAME REQUIRED";
	  document.getElementById("lnm").style.color="red";
	  flag=false;
	}
	if(c=="")
	{
	  document.getElementById("ag").innerHTML=" AGE IS NEEDED";
	  document.getElementById("ag").style.color="red";
	  flag=false;
	}	
	if(e.length > 0)
	{
	  document.getElementById("sp").innerHTML="";
	  document.getElementById("sp").style.color="red";
	  flag5=true;
	}
	
}
function fee1(){
	a=document.forms[0].fname.value;
	b=document.forms[0].lname.value;
	c=document.forms[0].age.value;
	d=document.forms[0].fee.value;
	e=document.forms[0].specialist.value;
	
	if(a=="")
	{
	  document.getElementById("fnm").innerHTML=" FIRST NAME MUST BE GIVEN";
	  document.getElementById("fnm").style.color="red";
	  flag=false;
	}
	if(b=="")
	{
	  document.getElementById("lnm").innerHTML=" LAST NAME REQUIRED";
	  document.getElementById("lnm").style.color="red";
	  flag=false;
	}
	if(c=="")
	{
	  document.getElementById("ag").innerHTML=" AGE IS NEEDED";
	  document.getElementById("ag").style.color="red";
	  flag=false;
	}
	if(e=="")
	{
	  document.getElementById("sp").innerHTML="***";
	  document.getElementById("sp").style.color="red";
	  flag=false;
	}
	if(d>=100 && d<=5000)
	{
	  document.getElementById("tk").innerHTML="TK";
	  document.getElementById("tk").style.color="black";
	  flag=false;
	}
	else if(d=="free" ||d=="FREE"||d=="Free")
	{
	  document.getElementById("tk").innerHTML="welcome!";
	  document.getElementById("tk").style.color="black";
	  flag=false;
	}
	else
	{
	  document.getElementById("tk").innerHTML="INVALID";
	  document.getElementById("tk").style.color="red";
	  flag6=true;
	}		
}
function mobile1(){
	a=document.forms[0].mobile.value;
	
	if(a.length ==11)
	{
	  document.getElementById("mbl").innerHTML="ok";
	  document.getElementById("mbl").style.color="black";
	  flag=false;
	}
   else
	{
	  document.getElementById("mbl").innerHTML="WRONG NUMBER";
	  document.getElementById("mbl").style.color="red";
	  flag7=true;
	}	
}
function mail1(){
	 x=document.forms[0].email.value;
	 atpos = x.indexOf("@");
     dotpos = x.lastIndexOf(".");
	 
  if(x=="")
	{
	document.getElementById("ma").innerHTML=" EMAIL MUST BE GIVEN";
	document.getElementById("ma").style.color="red";
	flag=false;
	}
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
       document.getElementById("ma").innerHTML=" INVALID EMAIL ADDRESS";
	   document.getElementById("ma").style.color="red";
	   flag=false;
    }
    else
	{
	   document.getElementById("ma").innerHTML=" VALID";
	   document.getElementById("ma").style.color="black";
	   flag8=true;
	   
	}	 
}
function usermail(){
	x=document.forms[0].username.value;
	atpos = x.indexOf("@");
    dotpos = x.lastIndexOf(".");
	
  if(x=="")
	{
	document.getElementById("unam").innerHTML="EMAIL MUST BE GIVEN";
	document.getElementById("unam").style.color="red";
	flag=false;
	}
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
       document.getElementById("unam").innerHTML="INVALID EMAIL ID";
	   document.getElementById("unam").style.color="red";
	   flag=false;
    }
    else
	{
	   document.getElementById("unam").innerHTML="VALID";
	   document.getElementById("unam").style.color="black";
	   flag9=true;
	}
}