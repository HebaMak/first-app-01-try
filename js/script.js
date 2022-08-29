  $(document).ready(function(){

  	$("nav img").addClass("animated");
 });




//filter courses
const searchBar = document.forms['theForm'].querySelector('input');
const value = searchBar.value;
const btn = document.forms['theForm'].querySelector('button');



searchBar.addEventListener('keyup' , function(e){
		'use strict';

		const term = e.target.value.toLowerCase();
		const children = document.getElementsByClassName('child');

		Array.from(children).forEach(function(child){

			const  title = child.querySelector('p').textContent ;

		if(title.toLowerCase().indexOf(term) != -1){

			child.parentNode.style.display='block';
		}else {
			child.parentNode.style.display='none';
		}


	});

});



