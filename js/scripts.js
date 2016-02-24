var random = setInterval(function(){
	r = Match.floor(Math.random() * (50 - 1) );
	getElementById(counter).innerHtml(r)
} , 1000)