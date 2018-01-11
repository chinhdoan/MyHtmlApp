/*
day du 
$(document).ready(function(){

});    

=
viet tat
$(function(){
	
});

*/
$(function(){
	$('#button-hochiminh').on('click', function(){
		$("#ho-chi-minh").toggleClass("hidden");
		$(this).toggleClass("btn-default");
		console.log("hello");
		$("#anchor-hochiminh").toggleClass("hidden");
	})
});
$(function(){
	$('#button-dxchinh').on('click', function(){
		$("#dx-chinh").toggleClass("hidden");
		$(this).toggleClass("btn-default");
		$("#anchor-dxchinh").toggleClass("hidden");
	})
});
$(function(){
	$('#button-jeffseid').on('click', function(){
		$("#jeff-seid").toggleClass("hidden");
		$(this).toggleClass("btn-default");
		$("#anchor-jeffseid").toggleClass("hidden");
	})
});
$(function(){
	$('#button-pewpew').on('click', function(){
		$("#pew-pew").toggleClass("hidden");
		$(this).toggleClass("btn-default");
		$("#anchor-pewpew").toggleClass("hidden");
	})
});
$(function(){
	(datatoggle="tooltip").tooltip();
});