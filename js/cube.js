$(function ($) {

	var sides = ['front', 'left', 'right', 'back', 'top', 'bottom', ];
	var dirName = ['Top', 'Right', 'Bottom', 'Left'];
	var vTurn = 0;
	var hTurn = 0;

	var images = [
			"images/animal-715543_640.jpg",
			"images/cat-618470_640.jpg",
			"images/puppy-384647_640.jpg",
			"images/rabbit-1882699_640.jpg",
			"images/snowy-owl-2099012_640.jpg",
			"images/swan-2107052_640.jpg"
		];

	function Cube(container) {
		this.container = container;
		this.cubeWrapper;
		this.init();
	};

	Cube.prototype = {
		init: function () {
			this.initDom();
		},
		initDom: function () {
			var cw = $('<div class="cubeContainer"></div>');
			this.container.append(cw);
			this.cubeWrapper = cw;
			var btnTop = $('<div class="button top"><div></div></div>');
			var btnBottom = $('<div class="button bottom"><div></div></div>');
			var btnLeft = $('<div class="button left"><div></div></div>');
			var btnRight = $('<div class="button right"><div></div></div>');
			var cubeSize = 500;
			var btnSize = cubeSize / 10;

			this.cubeWrapper.append(btnTop);
			this.cubeWrapper.append(btnBottom);
			this.cubeWrapper.append(btnLeft);
			this.cubeWrapper.append(btnRight);

			this.cubeWrapper.children('div.button').css({
				width: btnSize,
				height: btnSize
			});

			var box = $('<div class="box"></div>');
			this.cubeWrapper.append(box);
			box.css({
				width: cubeSize,
				height: cubeSize
			});
			for (var i = 0; i < sides.length; i++) {
				var day = $('<div class=' + sides[i] + '></div>');
				day.css({
					backgroundImage: 'url(' + images[i] + ')',
					width: cubeSize,
					height: cubeSize
				});
				box.append(day);
			}


			box.css({
				transform: 'translateZ(-' + cubeSize / 2 + 'px)'
			});
			box.children('div.top').css({
				transform: 'rotateX(-270deg) translateY(-' + cubeSize / 2 + 'px)'
			});
			box.children('div.bottom').css({
				transform: 'rotateX(-90deg) translateY(' + cubeSize / 2 + 'px)'
			});
			box.children('div.left').css({
				transform: 'rotateY(270deg) translateX(-' + cubeSize / 2 + 'px)'
			});
			box.children('div.right').css({
				transform: 'rotateY(-270deg) translateX(' + cubeSize / 2 + 'px)'
			});
			box.children('div.front').css({
				transform: 'translateZ(' + cubeSize / 2 + 'px)'
			});
			box.children('div.back').css({
				transform: 'translateZ(-' + cubeSize / 2 + 'px) rotateX(180deg)'
			});

			var outerWidth = cw.outerWidth();
			btnTop.css({
				top: 0,
				left: (outerWidth - btnSize) / 2,
				transform: 'translateY(-' + btnSize * 2 + 'px)',
			}).click(function () {
				$(this).nextAll('div.box').css({
					transform: 'translateZ(-' + cubeSize / 2 + 'px) rotateX(' + (vTurn += 90) + 'deg)'
				});
			});

			btnBottom.css({
				bottom: 0,
				left: (outerWidth - btnSize) / 2,
				transform: 'translateY(' + btnSize * 2 + 'px)',
			}).click(function () {
				$(this).nextAll('div.box').css({
					transform: 'translateZ(-' + cubeSize / 2 + 'px) rotateX(' + (vTurn -= 90) + 'deg)'
				});
			});
			btnLeft.css({
				top: (outerWidth - btnSize) / 2,
				left: 0,
				transform: 'translateX(-' + btnSize * 2 + 'px)',
			}).click(function () {
				$(this).nextAll('div.box').css({
					transform: 'translateZ(-' + cubeSize / 2 + 'px) rotateY(' + (hTurn -= 90) + 'deg)'
				});
			});
			btnRight.css({
				top: (outerWidth - btnSize) / 2,
				right: 0,
				transform: 'translateX(' + btnSize * 2 + 'px)',
			}).click(function () {
				$(this).nextAll('div.box').css({
					transform: 'translateZ(-' + cubeSize / 2 + 'px) rotateY(' + (hTurn += 90) + 'deg)'
				});
			});
		}
	};

	var c = new Cube($('#mainCon'), "dfdf");
});