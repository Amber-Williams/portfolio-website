var blank="blank.gif";

_IE6PNGImgFix=function(el)
{
	var pngexp=/\.png/i,
	al="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",
	es=el.style;
	if( el.src && el.src.match(pngexp) )
	{
		var image;
		if ( el.width && el.height )
		{
			image = new Image();
		}
		else
		{
			image = new Image(el.width, el.height);
		}
        image.onload = function() {
            el.width = image.width;
            el.height = image.height;
            image = null;
        };
		image.src = el.src;
		es.filter=al+el.src+"',sizingMethod='scale')";
		el.osrc = el.src;
		el.src=blank;
	}
}

_IE6PNGDivFix=function(el)
{
	var es=el.runtimeStyle;
	var bgPNG = el.currentStyle.backgroundImage.match(/url[("']+(.*\.png[^\)"']*)[\)"']/i),
	al="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='";
	var hasNoFilter = (el.currentStyle.filter == '' || el.currentStyle.filter == 'none' );
	if ( bgPNG && hasNoFilter)
	{
		es.filter=al+bgPNG[1]+"',sizingMethod='crop')";
		es.backgroundImage='url("' + blank + '")';
	
		if ( el.className && el.className != el.oclass )
			el.oclass = el.className;

		if ( !es.styleFloat && !es.width )
			es.width = "100%";
		if ( !el.onpropertychange )
		{
			el.onpropertychange = function()
			{
				if(event.propertyName=='className')
				{
					var el = event.srcElement;
					if ( el.oclass )
					{
						el.runtimeStyle.backgroundImage='';
						el.runtimeStyle.filter='';
						_IE6PNGDivFix(el);
					}
				}
			};
		}
	}
	
	
}
