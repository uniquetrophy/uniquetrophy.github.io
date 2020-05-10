jQuery(document).ready(function($) {

$(document).ready(function(){
        $("#chumma").modal('show');
});


setTimeout(function(){
		$("#chumma").modal('show');
}, 10000);

});


// $(document).ready(function(){
// var url = window.location.href;
// 	url = url.split("/");
// 	$(url).each(function(i, obj) {
// 		if (obj != '' && obj != 'https:' && obj != window.location.host) $('body').addClass('body_' + obj.toLowerCase());
// });