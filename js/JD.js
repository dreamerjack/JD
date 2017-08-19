// JavaScript Document




$(function(){

	
//头部广告 	
$('.db-left-center-pic').click(function(){
$('#db').slideUp()

	})	
//头部广告结束	
	
//北京	
$('.gl').mouseenter(function(){
$('.gl').addClass('gl-hover')
$('.list').show()
	
	
	}).mouseleave(function(){
	$('.gl').removeClass('gl-hover')	
	$('.list').hide()	
		})
	
$('.list').mouseenter(function(){
	
	$('.gl').addClass('gl-hover')
    $('.list').show()
	})
	.mouseleave(function(){
	$('.gl').removeClass('gl-hover')	
	$('.list').hide()	
		
		})	
		

	//我的京东
$('.m').mouseenter(function(){
$('.m').addClass('m-hover')	
$('#en').show()
	
	}).mouseleave(function(){
	$('.m').removeClass('m-hover')
	$('#en').hide()	
	
		})
		
$('#en').mouseenter(function(){
	$('.m').addClass('m-hover')
	$('#en').show()
	
	}).mouseleave(function(){
		$('.m').removeClass('m-hover')
		$('#en').hide()
		
		})			
	
	
	//我的京东结束
	
	//客户
	$('.c').mouseenter(function(){
	$('.c').addClass('c-hover')	
	$('#kh').show()	
		
		}).mouseleave(function(){
			$('.c').removeClass('c-hover')
			$('#kh').hide()
			})
			
	$('#kh').mouseenter(function(){
		$('.c').addClass('c-hover')
		$('#kh').show()
		})
		.mouseleave(function(){
			$('.c').removeClass('c-hover')
			$('#kh').hide()
			
			})		
	
	//客户结束
	
	
	//网站导航
	$('.w').mouseenter(function(){
	$('.w').addClass('w-hover')		
	$('#wz').show()	
		}).mouseleave(function(){
		$('.w').removeClass('w-hover')	
		$('#wz').hide()	
			
			})
	$('#wz').mouseenter(function(){
	$('.w').addClass('w-hover')	
	$('#wz').show()	
		}).mouseleave(function(){
	$('.w').removeClass('w-hover')		
	$('#wz').hide()		
			})
	
	//网站导航结束
	
	//我的购物车
	$('.gw').mouseenter(function(){
		
	$('.gw').addClass('g-hover')	
	$('#gw-list').show()	
		}).mouseleave(function(){
			$('.gw').removeClass('g-hover')
			$('#gw-list').hide()
			
			})
	$('#gw-list').mouseenter(function(){
		$('.gw').addClass('g-hover')
		$('#gw-list').show()
		}).mouseleave(function(){
		$('.gw').removeClass('g-hover')	
		$('#gw-list').hide()	
			
			})	
	
	//我的购物车结束
	
	//家电列表
	$('.c-left-list').mouseenter(function(){
		var index=$(this).index()
    $(this).addClass('c-left-list-item-hover').siblings().removeClass('c-left-list-item-hover')
	$('.c-left-list-item15-hover').eq(index).show().siblings().hide()
		}).mouseleave(function(){
			var index=$(this).index()
		$(this).removeClass('c-left-list-item-hover')	
		$('.c-left-list-item15-hover').eq(index).hide()	
			
			})
	$('.c-left-list-item15-hover').mouseenter(function(){
		var index=$(this).index()
	
		$(this).show().siblings().hide()
		$('.c-left-list').eq(index).addClass('c-left-list-item-hover')
		}).mouseleave(function(){
			var index=$(this).index()
			$(this).hide()
			$('.c-left-list').eq(index).removeClass('c-left-list-item-hover')
			})		
			
			
			
			
			
	
	//家电列表结束
	
	//图片轮播
	
	var index=0;
	$('.content .btn ul li').hover((function(){
		 index=$(this).index()
		$(this).addClass('on').siblings().removeClass('on');
		$('.content-left-top .content-left-top-pic ').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
		
		}),function(){})
		
	

	var play=setInterval(auto,3000)
	$('.content-left-top .content-left-top-pic ').hover(function(){
		clearInterval(play)
		},function(){
			play=setInterval(auto,3000)
			
			})
	
	
	
	function auto(){
		
		index++;
		index%=8;
		$('.content .btn ul li').eq(index).addClass('on').siblings().removeClass('on')
		$('.content-left-top .content-left-top-pic ').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()
		
		
		}
		
		
		

$('.hj').hover(function(){
$('.content-left-top-left').show()
$('.content-left-top-right').show()	

	},function(){
	$('.content-left-top-left').hide()	
	$('.content-left-top-right').hide()	
		})

$('.content-left-top-left').mouseenter(function(){
	$(this).show()
	$('.content-left-top-right').show()	
	$(this).css({"opacity":"0.8","filter":"alpha(opacity:80)"})
	clearInterval(play)
	
	
	}).mouseleave(function(){
		
	$(this).css({"opacity":"0.3","filter":"alpha(opacity:30)"})	
	play=setInterval(auto,3000)	
		})

$('.content-left-top-right').mouseenter(function(){
	$(this).show()
	$('.content-left-top-left').show()
	$(this).css({"opacity":"0.8","filter":"alpha(opacity:80)"})
	clearInterval(play)
	
	}).mouseleave(function(){
		
	$(this).css({"opacity":"0.3","filter":"alpha(opacity:30)"})		
	play=setInterval(auto,3000)	
		})
		
		
	
$('.content-left-top-left').click(function(){
	
	index--;
	if(index<0)index=7;
	$('.content .btn ul li').eq(index).addClass('on').siblings().removeClass('on')
	$('.content-left-top-pic').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()

	})
$('.content-left-top-right').click(function(){
	
	
	
	index++;
	index%=8;
	$('.content .btn ul li').eq(index).addClass('on').siblings().removeClass('on')
	$('.content-left-top-pic').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()
	})
		


		
	//图片轮播结束
	
	//图片轮播右侧
	$('.content-right-center-t-left a').mouseenter(function(){
		var index=$(this).index()
	$('.content-right-center-b').eq(index).show().siblings().hide()	
		
		})
		
		
	$('.content-right-bottom-t li').mouseenter(function(){
		var index=$(this).index()
		
	$('.content-right-bottom-t-h').eq(index).show().siblings().hide()
		})



$('.content-right-bottom-t-h-t li').mouseenter(function(){
var index=$(this).index()
$(this).addClass('content-right-bottom-t-h-t-li-hover').siblings().removeClass('content-right-bottom-t-h-t-li-hover')
$(this).children('a').css('color','#FFF')  
$(this).siblings().children('a').css('color','#666')
$('.content-right-bottom-t-h-x-hover').eq(index).show().siblings().hide()

$('.content-right-bottom-t-h-x-hover1').eq(index).show().siblings().hide()

$('.content-right-bottom-t-h-x-hover2').eq(index).show().siblings().hide()

$('.content-right-bottom-t-h-x-hover3').eq(index).show().siblings().hide()
})
	
$('.sex input').click(function(){
	var index=$(this).index()
	
	$('.city3').eq(index).show().siblings().hide()
	$('.city4').eq(index).show().siblings().hide()
	})	
	
	
	//图片轮播右侧结束
	//京东无线
	$('.content-right-jwx').hover(function(){
	$('.content-right-jwx-x').show()	
		
		},function(){
	$('.content-right-jwx-x').hide()		
			
			})
	
	
	$('.content-right-jwx-x').hover(function(){
	$('.content-right-jwx-x').show()	
		
		},function(){
	$('.content-right-jwx-x').hide()		
			
			})
	
	
	
	//京东无线结束
	
	//京东秒杀
	$('.product-1').mouseenter(function(){
		var index=$(this).index()
		
	$('.product-1 .pr-top ').eq(index).stop(true).animate({top:"-10px"})
	$(this).find('.pb-t-h').addClass('pb-t-hc')	
		
		}).mouseleave(function(){
			var index=$(this).index()
			$('.product-1 .pr-top ').eq(index).stop(true).animate({top:"0px"})
		$(this).find('.pb-t-h').removeClass('pb-t-hc')
			})
			
	
	//京东秒杀结束
	
	
	//发现好货
  $('.goods-left-b-pic').mouseenter(function(){
	  var index=$(this).index()
	
$('.goods-left-b-pic .goods-left-b-pic-p').eq(index).stop(true).animate({left:"-10px"})
	  }).mouseleave(function(){
		var index=$(this).index()
$('.goods-left-b-pic .goods-left-b-pic-p').eq(index).stop(true).animate({left:"0px"})  
		  
		  })
	//发现好货结束
	//品牌头条
	$('.goods-left-center-c-left').mouseenter(function(){
		var index=$(this).index()
	$('.goods-left-center-c-left  .goods-left-center-c-left-b').eq(index).stop(true).animate({left:"-10px"})
		}).mouseleave(function(){
			var index=$(this).index()
			$('.goods-left-center-c-left  .goods-left-center-c-left-b').eq(index).stop(true).animate({left:"0px"})
			})
	
//品牌头条结束	
	
	//排行榜
	$('.goods-left-bo-u li ').hover(function(){
		var index=$(this).index()
		$('.goods-left-t-b-list-hover').eq(index).show().siblings().hide()
		
		},function(){})
		
	$('.goods-left-t-b-list-li').hover(function(){
		$(this).children('p').children('a').css("color","#c81623")
		
		},function(){
		$(this).children('p').children('a').css("color","#666")	
			
			})	
		
		
		
	
	//排行榜结束
	
	
//疯狂抢购
$('.get-center-list ').mouseenter(function(){
	
	$(this).children('.get-center-list-right').children('img').stop(true).animate({left:"-25px"})
	
	}).mouseleave(function(){
		$(this).children('.get-center-list-right').children('img').stop(true).animate({left:"0px"})
		})
//疯狂抢购结束



//京东超市
$('.jdshop-list').hover(function(){
	
$(this).children('.jdshop-list-pic').stop(true).animate({backgroundPositionX:"-8px"})
	
	
	},function(){
		$(this).children('.jdshop-list-pic').stop(true).animate({backgroundPositionX:"0"})
		
		})


//京东超市结束
	
	

	
	//爱逛
	$('.likeshop-left-top-left img').mouseenter(function(){
		
		$(this).stop(true).animate({left:"-10px"})
		
		}).mouseleave(function(){
			
		$(this).stop(true).animate({left:"0px"})
			
			})
			
	
			
	//
	
	$('.likeshop-left-top-right-list').mouseover(function(){
		
	
		$(this).children('.likeshop-left-top-right-list-pic').children('img').stop(true).animate({left:"-10px"})
		
		}).mouseout(function(){
			var index=$(this).index()
		$(this).children('.likeshop-left-top-right-list-pic').children('img').stop(true).animate({left:"0px"})
			
			})
	
	
	
	//
	
	$('.likeshop-left-center-list img ').mouseenter(function(){
    
		
       $(this).stop(true).animate({left:"-10px"})
		
		}).mouseleave(function(){
			
			
			$(this).stop(true).animate({left:"0px"})
		})
	
	//

$('.trval-list-top-left img ').mouseenter(function(){
	
$(this).stop(true).animate({left:"-10px"})
	
	}).mouseleave(function(){
		$(this).stop(true).animate({left:"0px"})
		
		})

 $('.likeshop-left-top-right-list').mouseenter(function(){
	
	
$(this).children('.trval-list-top-right-pic').children('img').stop(true).animate({left:"-10px"})
	
	}).mouseleave(function(){
$(this).children('.trval-list-top-right-pic').children('img').stop(true).animate({left:"0px"})
		
		})


//还没逛够
$('.goodslist-list').hover(function(){
	
	$(this).addClass('goodslist-list-hover')
	$(this).children('.goodslist-list-wz1').addClass('goodslist-list-wz1-hover')
	},function(){
		
		$(this).removeClass('goodslist-list-hover')
		$(this).children('.goodslist-list-wz1').removeClass('goodslist-list-wz1-hover')
		})
	

//还没逛够结束


	
	
	})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	