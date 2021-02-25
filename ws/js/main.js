$(function() {

	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(5 * height);

	$(".page").width(width);
	$(".page").height(height)

	var nowpage = 0;
	
//第一页
	if(nowpage == 0) {
		$("#moon").animate({
			left: "25%",
			bottom: "58%"
		}, {
			duration: 3000,
			complete: function() {
				$("#witch").animate({
					left: "30%"
				}, {
					duration: 4000,complete:function(){
						$("#text").animate({left:"26%"},{duration:2000})
					}
				});
				$("#witch").click(function() {
					$("#witch").animate({
						left: "47%",
						top: "60%"
					}, {
						duration: 4000,
						complete: function() {
							$("#witch").fadeOut("slow");
							$("#text").animate({left: "-200%",top: "60%"},{duration:2000,complete:function(){
								$("#text").fadeOut("fast");
								$("text").animate({left:"-200%"},{duration:200});
								$("#text").fadeIn("fast");
							}});
							$("#text").animate({
								left: "26%"
							}, {
								duration: 1000
							});
							$("#witch").animate({
								left: "-100%"
							}, {
								duration: 400,
								complete: function() {
									$("#witch").fadeIn("fast");
									$("#witch").animate({
										left: "30%",
										top: "30%"
									}, {
										duration: 2000
									})
								}
							})
						}
					})
				})
			}
		});
	}

	$(".content").swipe({
		swipe: function(evevt, direction, distance, duration, fingerCount) {
			if(direction == "up") {
				nowpage++;
			}
			if(direction == "down") {
				nowpage--;
			}

			if(nowpage < 0) {
				nowpage = 0;
			}
			if(nowpage > 4) {
				nowpage = 4;
			}

			$(".content").animate({
				top: -nowpage * 100 + "%"
			}, {
				duration: 400,
				complete: function() {
					if(nowpage == 1) {
						$(".page2-shu").animate({
							width: "80%"
						}, {
							duration: 800,
							complete: function() {
								$(".page2-nangua1").fadeIn(400);
								$(".page2-nangua2").fadeIn(600);
								$(".page2-nangua5").fadeIn(800);
								$(".page2-caoren").fadeIn(1000)
							}
						})
						$(".page2-angel").animate({
							right: "25%"
						}, {
							duration: 2000
						})

						$(".page2-ghost").animate({
							left: "5%"
						}, {
							duration: 3000
						})
						$(".page2-nangua").fadeIn(800);
					}
					if(nowpage == 2) {

					}
				}
			})
		}
	})

	$(function() {
		var index = 1;
		var _that = this;
		var timer = setInterval(function() {
			$(".page2-angel").attr("src", "img/angel/angel_" + getIndex(index) + ".png");
			index++;
			if(index > 6) {
				index = 1;
			}
		}, 100)
	})

	$(".page2-nangua").click(function() {
		var index = 1;
		var _that = this;
		var timer = setInterval(function() {
			$(_that).attr("src", "img/nangua/nangua_" + getIndex(index) + ".jpg");
			index++;

			if(index > 33) {
				clearInterval(timer);
			}
		}, 100)
	})

	$(".page2-nangua1").click(function() {
		$(this).animate({
			height: "0"
		}, {
			duration: 100
		})
	})

	function getIndex(index) {
		if(index < 10) {
			return "0" + index;
		} else {
			return index;
		}
	}
	var timer;
	var index = 1;
	var img = document.getElementById("qq")
	timer = setInterval(function() {
		img.src = "img/ren_" + getIndex(index) + ".png";
		index++;
		if(index > 12) {
			index = 1;
		}
	}, 150)

	function getIndex(index) {

		if(index < 10) {
			return "0" + index;
		} else {
			return index;
		}
	}
	document.getElementById("zi").onclick = function() {
		$("#gui").fadeIn(2000);
		$("#gui2").fadeIn(2000);
	}
})