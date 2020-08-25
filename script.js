new WOW().init();

$(function(){

	$('.сurrency').on('click', function(){
		$.get('http://data.fixer.io/api/latest', 
			{'access_key' : '72928c66b4244f799bf46474f19ce3cf'}, 
			function(response){

				let rub = response.rates.RUB
				let usd = response.rates.USD
				let rubEUR = rub
				let score = $('.eur-rub').text(response.rates.RUB.toFixed(3))
		});
	});



	$('.сurrency__second').on('click', function(){
		$.get('http://data.fixer.io/api/latest', 
			{'access_key' : '72928c66b4244f799bf46474f19ce3cf'}, 
			function(response){

				let rub = response.rates.RUB
				let usd = response.rates.USD
				let rubEUR = rub
				let rubUSD = rub / usd

				let score_doub = $('.usd-rub__second').text(rubUSD.toFixed(3))


		});

	});

	$(document).ready(function() {
		$('.menu__burger').click (function(event) {
			$('.menu__burger,.item__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
	});

	
	
});