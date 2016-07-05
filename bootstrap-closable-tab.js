var closableTab = {
	//frame加载完成后设置父容器的高度，使iframe页面与父页面无缝对接
	frameLoad:function (frame){
			var mainheight = $(frame).contents().find('body').height();
			alert($(window).height()+":"+mainheight);
			$(frame).parent().height(mainheight);
		},

    //添加tab
	addTab:function(tabItem){ //tabItem = {id,name,url,closable}

		var id = "tab_seed_" + tabItem.id;
		var container ="tab_container_" + tabItem.id;

		$("li[id^=tab_seed_]").removeClass("active");
		$("div[id^=tab_container_]").removeClass("active");

		if(!$('#'+id)[0]){
			var li_tab = '<li role="presentation" class="" id="'+id+'"><a href="#'+container+'"  role="tab" data-toggle="tab" style="position: relative;padding:2px 20px 2px 15px">'+tabItem.name;
			if(tabItem.closable){
				li_tab = li_tab + '<i class="glyphicon glyphicon-remove small" tabclose="'+id+'" style="position: absolute;right:4px;top: 4px;"  onclick="closableTab.closeTab(this)"></i></a></li> ';
			}else{
				li_tab = li_tab + '</a></li>';
			}
		
		 	var tabpanel = '<div role="tabpanel" class="tab-pane" id="'+container+'" style="width: 100%;">'+
	    					  '<iframe src="'+tabItem.url+'" id="tab_frame_2" frameborder="0" style="overflow-x: hidden; overflow-y: hidden;width:100%;height: 100%"  onload="closableTab.frameLoad(this)"></iframe>'+
	    				   '</div>';


			$('.nav-tabs').append(li_tab);
			$('.tab-content').append(tabpanel);
		}
		$("#"+id).addClass("active");
		$("#"+container).addClass("active");
	},

	//关闭tab
	closeTab:function(item){
		var val = $(item).attr('tabclose');
		var containerId = "tab_container_"+val.substring(9);
   	    
   	    if($('#'+containerId).hasClass('active')){
   	    	$('#'+val).prev().addClass('active');
   	    	$('#'+containerId).prev().addClass('active');
   	    }


		$("#"+val).remove();
		$("#"+containerId).remove();
	}
}