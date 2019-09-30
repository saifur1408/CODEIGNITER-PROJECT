function loadForm()
{
	var divid = $('#user_type').val();

	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getDistList',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		if(json.type=="ADMIN")
		{	
			$("#company").hide();
			$("#user").show();
			$("#AorU").val(json.type);
			
		}
		else if(json.type=="USER")
		{	
			$("#company").hide();
			$("#user").show();
			$("#AorU").val(json.type);
			
		}
		else if (json.type=="MANUFACTURER")
		{
			$("#user").hide();
			$("#company").show();
			$("#C").val(json.type);
		}
		else if (json.type=="VENDOR")
		{
			$("#user").hide();
			$("#company").show();
			$("#C").val(json.type);
		}
		else if (json.type=="NGO")
		{
			$("#user").hide();
			$("#company").show();
			$("#C").val(json.type);
		}
		}
	});
}




function handleChange1()
{
	var divid = 1;
	var res='';
	document.getElementById("apk").innerHTML="";
	$("#QUANTITY").val(res);
	$.ajax({
		url:  'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		$("#per_price").val(json.unit_price);
		$("#other_price").val(json.miscellaneous);
    	}
	});
}
function handleChange2()
{
	var divid = 2;
	var res='';
	document.getElementById("apk").innerHTML="";
	$("#QUANTITY").val(res);
	$.ajax({
		url:  'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		$("#per_price").val(json.unit_price);
		$("#other_price").val(json.miscellaneous);
    	}
	});
}
function handleChange3()
{
	var divid = 3;
	var res='';
	document.getElementById("apk").innerHTML="";
	$("#QUANTITY").val(res);
	$.ajax({
		url:  'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		$("#per_price").val(json.unit_price);
		$("#other_price").val(json.miscellaneous);
    	}
	});
}
function handleChange4()
{
	var divid = 4;
	var res='';
	document.getElementById("apk").innerHTML="";
	$("#QUANTITY").val(res);
	$.ajax({
		url:  'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		$("#per_price").val(json.unit_price);
		$("#other_price").val(json.miscellaneous);
    	}
	});
}
function handleChange5()
{
	var divid = 5;
	var res='';
	document.getElementById("apk").innerHTML="";
	$("#QUANTITY").val(res);
	$.ajax({
		url:  'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		$("#per_price").val(json.unit_price);
		$("#other_price").val(json.miscellaneous);
    	}
	});
}
function handleChange6()
{
	var divid = 6;
	var res='';
	document.getElementById("apk").innerHTML="";
	$("#QUANTITY").val(res);
	$.ajax({
		url:  'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		type: 'GET',
		dataType: 'json',
		success: function(json) {
		$("#per_price").val(json.unit_price);
		$("#other_price").val(json.miscellaneous);
    	}
	});
}
function calculation()
{
	var quantity = $('#QUANTITY').val();
	var unit_price= $('#per_price').val();
	var miscellaneous = $('#other_price').val();
	if(unit_price=="" || miscellaneous=="")
	{
		document.getElementById("apk").innerHTML=" STOVE TYPE REQUIRED!";
		document.getElementById("apk").style.color="red";
	}
	else if(unit_price!="" || miscellaneous!="")
	{
		document.getElementById("apk").innerHTML="";
	
	}
	
		$.ajax({
			url:  'http://localhost/SREDA_PROJECT/ajax/calcu',
			data: {did: quantity,did1 :unit_price,did2:miscellaneous},
			success: function(result) {
			$("#TOTAL").val(result);
	    	}
	}); 
	//alert("ok");	
	
} 



/*function handleChange1()
{
	var divid = $('#divisions').val();
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		success: function(result){
		//$('#districts').html(result);
		//$('#ser').html(result);
		$("#PRICE").val(result);//to show result in input box
		}
	});
}*/
/*function handleChange2()
{
	var divid = $('#st2').val();
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		success: function(result){
		//$('#per_price').html(result);
		//$('#other_price').html(result);
		$('#districts').html(result);
		}
	});
}
function handleChange3()
{
	var divid = $('#stove3').val();
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getPrice',
		data: {did: divid},
		success: function(result){
		//$('#per_price').html(result);
		//$('#other_price').html(result);
		$('#districts').html(result);
		}
	});
} */



/*function loadEmpty()
{
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getEmpty',
		success: function(result){
		 $("#user, #company").toggle();
		 //$("#company").hide();
		 //$("#user").hide();
		}
	});
} */
/*function loadForm()
{
	var divid = $('#user_type').val();
	//alert(divid);
	
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getDistList',
		data: {did: divid},
		success: function(result){
			//$('#districts').html(result);
			//$('#type').html(result);
		}
	});
} */
/*function loadForm()
{
	var divid = $('#user_type').val();
	
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getDistList',
		data: {did: divid},
		success: function(result){
		if(result=="ADMIN")
		{	
			$("#company").hide();
			$("#user").show();
			$('#abcde').html(result);
			$("#abcde").val(result);
			
		}
		else if(result=="USER")
		{	
			$("#company").hide();
			$("#user").show();
			$('#abcde').html(result);
			
		}
		else if (result=="MANUFACTURER")
		{
			$("#user").hide();
			$("#company").show();
			$('#abcd').html(result);
		}
		else if (result=="VENDOR")
		{
			$("#user").hide();
			$("#company").show();
			$('#abcd').html(result);
		}
		else if (result=="NGO")
		{
			$("#user").hide();
			$("#company").show();
			$('#abcd').html(result);
		}
	}
	});
} */
