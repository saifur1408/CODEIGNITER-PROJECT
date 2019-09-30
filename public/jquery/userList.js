function loadUser()
{
	var divid = $('#user_typee').val();
	//alert("ok");
	//alert(divid);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getSelectedUserList',
		data: {did: divid}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#name').html(result);
			//$('#type').html(result);
		}
	}); 
}
function loadAdmin()
{
	var divid = $('#user_typee').val();
	//alert("ok");
	//alert(divid);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getSelectedAdminList',
		data: {did: divid}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#A_name').html(result);
			//$('#type').html(result);
		}
	}); 
}

function search()
{
	var divid = $('#search_value').val();
	//alert("ok");
	//alert(divid);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/search_user',
		data: {did: divid}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#name').html(result);
			//$('#type').html(result);
		}
	}); 
}

function AdminSearch()
{
	var divid = $('#Admin_search_value').val();
	//alert("ok");
	//alert(divid);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/search_Admin',
		data: {did: divid}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#A_name').html(result);
			//$('#type').html(result);
		}
	});  
}
function loadSale()
{
	var divid = $('#Sale_typee').val();
	//alert("ok");
	//alert(divid);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/getSelectedSaleList',
		data: {did: divid}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#S_name').html(result);
			//$('#type').html(result);
		}
	}); 
}
function Sale_search()
{
	var divid = $('#Sale_search_value').val();
	//alert("ok");
	//alert(divid);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/search_Sale',
		data: {did: divid}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#S_name').html(result);
			//$('#type').html(result);
		}
	});  
}
function per_user_loadSale()
{
	var divid = $('#user_id').val();
	var divid2 = $('#Sale_typeeee').val();
	//alert("ok");
	//alert(divid);
	//alert(divid2);		
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/get_per_user_SaleList',
		data: {did: divid, type: divid2}, 
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#per_user_sale_info').html(result);
			//$('#type').html(result);
		}
	}); 
}
function per_user_Sale_search()
{
	var divid = $('#user_id').val();
	var divid2 = $('#Sale_per_search_value').val();
	//alert("ok");
	//alert(divid);
	//alert(divid2);
			
	$.ajax({
		url: 'http://localhost/SREDA_PROJECT/ajax/search_Sale_per_user',
		data: {did: divid, type: divid2},  
		//type: 'GET',
		//dataType: 'json',
		success: function(result){
			//$('#name').html(result);
			//$("#by_default").hide();
			//$("#selected").hide();
			$('#per_user_sale_info').html(result);
			//$('#type').html(result);
		}
	});  
}