$(function() {
//    alert(jQuery.fn.jquery);
    $('#mbr').focus();
    if($('#OwedTotal').html()==="0.00")
	$('#wrapnm').addClass('green');
    else
	$('#wrapnm').removeClass('green');
    if($('#Towel').html()==='0') {
	$('#twl').hide();
	$('#Towel').html('');
    }
    else {
	$('#twl').show();
	$('#Towel').html('TOWEL');
    }
    if($('#nda').html()==='0.00') 
	$('#n').hide();
    else
	$('#n').show();
});