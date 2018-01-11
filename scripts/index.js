window.onload=function(){
	var peopleMenu =document.getElementById('people-menu');
	var peoples = document.getElementsByClassName('people');
	var lis = document.getElementsByTagName('li');
/*
Hàm sự kiện 1 
	peopleMenu.addEventListener('mouseover' , myFunction());

	function myFunction(){

	}
	bằng với
Hàm sự kiện 2
	anonymous function
	peopleMenu.addEventListener('mouseover' , Function(){

	});
*/	
	//show by mouseover
	peopleMenu.addEventListener('mouseover' , function(){
		for( var i = peoples.length -1 ; i>=0 ; i--)

		{
			peoples[i].classList.remove('hidden');
		}
		});
	//hide by clicking
		peopleMenu.addEventListener('click' , function(){
		for( var i = peoples.length -1 ; i>=0 ; i--)
		{
			peoples[i].classList.add('hidden');
		}
		});
}
       
     
 
 
