public function load_view()
	{
		$data1 = $this->input->post('mydiv');
		if($data1 == "MANUFACTURER")
		{
		   echo $this->load->view('view_super_admin_update_search', $data1, TRUE);
		}
		else if($data1 == "USER")
		{
			echo $this->load->view('view_super_admin_add_employee', $data1, TRUE);
		}
	} 
	
	
	public function getDistList()
	{
		$id = $this->input->get_post('did');
		$this->load->model('usermodel');
		$distlist = $this->usermodel->haha();
		$outputstr = '';
		
		foreach($distlist as $dist)
		{
			$outputstr .= "<option value='$dist[username]'>$dist[username]</option>";
		}
		echo $outputstr;
	}
	/*function getValue(){
	 var datas = $('#user_type').val();
     alert(datas) ;
     var mydiv = datas;
     $.Ajax({
          type:"post",
          url:<?php echo base_url('/ajax/load_view/');?>
          data:{"mydiv":mydiv},

         success:function(data){
             $('#districts').html(data);
         }
     });
 }
 
  function getValue(){

	// var divid = $('#user_type').val();
	 var datas = $('#user_type').val();
     alert(datas) ;
     var mydiv = datas;
    // url = "<?php echo base_url('/ajax/load_view/');?>/" + mydiv;
     //$('#districts').load(url);
	 $.Ajax({
          type:"post",
          url:<?php echo base_url('/ajax/load_view/');?>
          data:{"mydiv":mydiv},

         success:function(data){
             $('#districts').html(data);
         }
     });

 } */





/*public function load_view()
	{
		foreach($student_prof as $row){
		$gen = "GeneralInformation";
		echo '<input type="submit"  value="GeneralInformation" class="btn btn-primary active" name="general" id="submit" onclick="getValue("'.$gen.'")">';
		echo '</div>';

	}
	}*/
	public function getFormlist()
	{
		$id = $this->input->get_post('did');
		echo $id;
		/*if ($id=='ADMIN')
		{
			$outputstr = "<option value="abc">abc</option>";
		
		echo $outputstr;
		}*/
		 if ($id=='MANUFACTURER')
		{
			$outputstr = "<option value="1">1</option>";
		
		echo $outputstr;
		}
		else if ($id=='VENDER')
		{
			$outputstr = "<option >2</option>";
		
		echo $outputstr;
		}
		else if ($id=='NGO')
		{
			$outputstr = "<option value="abc">abc</option>";
		
		echo $outputstr;
		}
		else if ($id=='USER')
		{
			$outputstr = "<option value="abc">abc</option>";
		
		echo $outputstr;
		}  
		
		
	}
