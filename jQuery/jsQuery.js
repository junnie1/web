jQuery(document).ready(function(){

	$('p').css({'font-size':'20px'});
	$('p:first-child').css({'font-style':'italic', 'font-weight':'bold'});
	$('form').css({'font-style':'italic', 'font-weight':'bold'});
	$('[src$=png]').css({'width':'190px', 'float':'left', 'margin-right':'10px'});
	$('h2').css({'font-family':'Verdana','font-size':'24px', 'font-weight':'bold'});
	$('.description').css({'width':'90%', 'text-align':'justify'});
	$('a').css({'color':'aqua','text-decoration':'none','font-size':'20px', 'font-style':'italic'});
	$('a').hover(function(){
		$(this).css({'color':'red'});
		$(this).css({'text-decoration':'underline'});
	}, function(){
		$(this).css({'color':'aqua'});
		$(this).css({'text-decoration':'none'});
	});
	$('body').css({'background-image':'url(./fon.jpg)','color':'white'});
	$('form').css({'float':'right', 'margin-right':'50px', 'margin-left':'50px', 'margin-top':'20px', 'padding':'15px','border':'3px dashed grey'});
	$('.button').css({'border-radius':'15px', 'width':'170px', 'background-color':'steelblue', 'color':'white', 'font-weight':'bold', 'padding':'10px', 'font-size':'15px', 'font-family':'Verdana'})
	$('tr').css({'height':'320px'})

	$('a').each(function(){
		//alert($(this).attr('href'));
		if ($(this).attr('href').startsWith('http:')){
			$(this).attr('href', 'https' + ($(this).attr("href").slice(4)));	
		}	
		//alert($(this).attr('href'));	
	});

	$('a').prepend('↗ ');
	$('a').attr('target', '_blank');
	$('#change').click(function(){
		$('a').each(function(){
			$(this).text($(this).text().slice(2));
		})
		$('form input').prop('disabled', true);
		$('form select').prop('disabled', true);
		$('a').attr('target', '_self');
	});

	$('#fadeOut').click(function(){
		$('#mage p:first-child').fadeOut('slow');
	});
	
	$('#fadeTo').click(function(){
		$('#rogue img').fadeTo('slow', '0.3');
	});

	$('#hide').click(function(){
		$('#warrior p:last').hide('slow');
	});

	$('#slideUp').click(function(){
		$('#druid h2').slideUp('slow');
	});

	$('#slideToggle').click(function(){
		$('#priest img').slideToggle('fast');
	});

	$('#refresh').click(function(){
		$.ajax({
			url: 'https://inxaoc.github.io/example/ajax-1.html',
			success: function(data){
		     	$('.ajaxGet').append(data);
	 		}
		});
	});

	$('#refreshJSON').click(function(){
		
		$.getJSON(
			"https://inxaoc.github.io/example/ajax.json", 
			{"name":"Lyuba", "surname":"Unchikova"},
			function(data){
				$(".ajaxGetJSON").append(list(data));
			}
	    );
	});
	function list(elem){
		let ul = document.createElement('ul');
		for (key in elem){
			let li = document.createElement('li');
      		if (typeof (elem[key]) == 'object'){
      			li.innerText = key;
           		li.appendChild(list(elem[key]));
        	} else {
            	li.innerText = elem[key];
    	    }
        	ul.appendChild(li);
    	}
    	return ul;
	}

});



