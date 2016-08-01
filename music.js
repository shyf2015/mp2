function Mplay(){
	var i=0;
	var a=[];
	var head;
	var audio=$("#music").get(0);
	$(".pause").on("click",function(){
		audio.play();
		$(".pause").hide();//css('display','none');
		$(".play2").show();//css('display','block');
		$(".list ul li .begin").show().eq(i).hide();
		$(".list ul li .close").hide().eq(i).show();
		head=$('.list ul li').eq(i).text();
		$('.play h3').html(head);
		$('.portrait ul li').eq(i).show().siblings().hide();
	})
	$(".play2").on("click",function(){
		audio.pause();
		$(".play2").hide();//css('display','none');
		$(".pause").show();//css('display','block');
		$(".list ul li .begin").show();
		$(".list ul li .close").hide();
		$('.portrait ul li').eq(i).show().siblings().hide();
	})
	$(".list ul li").on("click",function(){
		i=$(this).index();
		audio.src=$(this).attr("dateSrc");
		audio.play();
		$(".list ul li .begin").show().eq(i).hide();
		$(".list ul li .close").hide().eq(i).show();
		//$(".list ul li span").eq(i).hide();//.siblings('span').show();
		//$(".list ul li a").eq(i).show();//.siblings('a').hide();
		$(".pause").hide();
		$(".play2").show();
		head=$('.list ul li').eq(i).text();
		$('.play h3').html(head);
		$('.portrait ul li').eq(i).show().siblings().hide();
	})
	$('.previous').on('click',function(){
		if(i==0){i=6;}else{i--;}
		audio.src=$('.list ul li').eq(i).attr("dateSrc");
		audio.play();
		$(".pause").hide();
		$(".play2").show();
		$(".list ul li .begin").show().eq(i).hide();
		$(".list ul li .close").hide().eq(i).show();
		head=$('.list ul li').eq(i).text();
		$('.play h3').html(head);
		$('.portrait ul li').eq(i).show().siblings().hide();
	})
	$('.next').on('click',function(){
		if(i==6){i=0;}else{i++;}
		audio.src=$('.list ul li').eq(i).attr("dateSrc");
		audio.play();
		$(".pause").hide();
		$(".play2").show();
		$(".list ul li .begin").show().eq(i).hide();
		$(".list ul li .close").hide().eq(i).show();
		head=$('.list ul li').eq(i).text();
		$('.play h3').html(head);
		$('.portrait ul li').eq(i).show().siblings().hide();
	})

}