$(document).ready( function() {
	var total = 0;
	$('#addItem').click(function() {
		var toAddItem = $('input[name= item]').val();
		var toAddPrice = parseInt($('input[name= price]').val());
		console.log(typeof toAddPrice);
		$('.registerList').append('<tr class="listItem"><td>' + toAddItem + '</td><td>' + toAddPrice + '</td></tr>');
		total += toAddPrice;
		$('.total').html("$ " + total);
	});

	$(document).on('click', '.listItem', function() {
		var lastPrice = parseInt($(this).children().eq(1).text());
		console.log(typeof lastPrice);
		total -= lastPrice;
		$('.total').html("$ " + total);
		$(this).remove();
	});
});