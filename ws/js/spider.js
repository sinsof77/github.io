$(function(){
	var timer;
			
			bat("fly");
			timer=setInterval(function(){
				$(".spider").animate({top:"40%"},{duration:5000});
				$(".spider").animate({top:"50%"},{duration:2000});
			},2000)
			
			
			//bat("lfly");
			function move(){
				$(".grim").animate({left:"40%"},{duration:5000,complete:function(){
					$("#fly").animate({left:"40%",top:"60%"},{duration:3000,complete:function(){
						$(".grim").animate({left:"90%"},{duration:5000});
						$(".mummy").animate({left:"100%"},{duration:2000});
						$("#fly").animate({left:"60%",top:"-10%"},{duration:3000});
						$(".mummy").fadeOut(1000);
						$(".grim").fadeOut(1000,function(){
							$("#paint").attr("src","img/Paint-Unlit.png");
						});
						
						
					}});
				}});
			}
			function bat(name){
				var timer;
			
				var img=document.getElementById(name);
//				img.src="Animations/cymbal/cymbal_03.jpg"
				var index=1;
				timer=setInterval(function(){
					img.src="img/animations/"+name+index+".png";
					
					index++;
					if(index>6){
						index=1;
					}
				},100)
			}
			
			function bat1(name,ximg){
				var timer;
			
				var img=document.getElementById(name);
//				img.src="Animations/cymbal/cymbal_03.jpg"
				var xindex=5;
				timer=setInterval(function(){
					img.src="img/animations/"+ximg+xindex+".png";
					
					xindex++;
					if(xindex>6){
						xindex=1;
					}
					
				},200)
			}
			$("#paint").click(function(){
				$(this).attr("src","img/Paint-Lit.png");
				move();
				
			});
})