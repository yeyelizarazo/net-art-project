$('.cuadrado').on('mouseover',function(){
	var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
	$(this).css('background',hue);
});