window.onload = function()
{
	resizeImage();
	prepareText();
}

function prepareText()
{

	var fontFamily;
	var fontSize;
	var title;
	var description;
	for ( var i=0; i<data.length; i++ )
	{

		// fontFamily = getStyleProperty(document.getElementById('albumTitle_' + i), 'font-family');
		// fontSize = getStyleProperty(document.getElementById('albumTitle_' + i), 'font-size');
		title = data[i].title;
		var titleEl = document.getElementById('albumTitle_' + i);
		titleCut = cutString(title, 170, titleEl);
		
		if ( false !== titleCut )
		{
			titleEl.innerHTML = titleCut;
		}
		else
		{
			titleEl.innerHTML = title;
		}

		var descriptionEl = document.getElementById('albumDescription_' + i);
		// fontFamily = getStyleProperty(document.getElementById('albumDescription_' + i), 'font-family');
		// fontSize = getStyleProperty(document.getElementById('albumDescription_' + i), 'font-size');
		description = data[i].description;
		descrCut = cutString(description, 170, descriptionEl)
		if ( false !== descrCut )
		{
			var descrLen = descrCut.length - 3;
			descrCut = descrCut.substr(0, descrLen);
			var newDescr =  descrCut;
			var descrCutSecond = description.replace(descrCut, '');
			descrCut = cutString(descrCutSecond, 170, descriptionEl);
			if ( false !== descrCut )
			{
				newDescr += descrCut;
			}
			else
			{
				newDescr += descrCutSecond;
			}
			descriptionEl.innerHTML = newDescr;
		}
		else
		{
			descriptionEl.innerHTML = description;
		}
		
		/*
		descriptionCut = cutStringHeight(description, 40, descriptionEl, 180);
		
		if ( false !== descriptionCut )
		{
			descriptionEl.innerHTML = descriptionCut;
		}
		else
		{
			descriptionEl.innerHTML = description;
		}
		*/
	}
/*	
	var titleOld;
	var descriptionOld;
	for ( var i=0; i<dataOld.length; i++ )
	{

		// fontFamily = getStyleProperty(document.getElementById('albumTitle_' + i), 'font-family');
		// fontSize = getStyleProperty(document.getElementById('albumTitle_' + i), 'font-size');
		title = dataOld[i].title;
		var titleEl = document.getElementById('albumTitleOld_' + i);
		titleCut = cutString(title, 170, titleEl);
		
		if ( false !== titleCut )
		{
			titleEl.innerHTML = titleCut;
		}
		else
		{
			titleEl.innerHTML = title;
		}

		var descriptionEl = document.getElementById('albumDescriptionOld_' + i);
		// fontFamily = getStyleProperty(document.getElementById('albumDescription_' + i), 'font-family');
		// fontSize = getStyleProperty(document.getElementById('albumDescription_' + i), 'font-size');
		description = dataOld[i].description;
		descrCut = cutString(description, 170, descriptionEl)
		if ( false !== descrCut )
		{
			var descrLen = descrCut.length - 3;
			descrCut = descrCut.substr(0, descrLen);
			var newDescr =  descrCut;
			var descrCutSecond = description.replace(descrCut, '');
			descrCut = cutString(descrCutSecond, 170, descriptionEl);
			if ( false !== descrCut )
			{
				newDescr += descrCut;
			}
			else
			{
				newDescr += descrCutSecond;
			}
			descriptionEl.innerHTML = newDescr;
		}
		else
		{
			descriptionEl.innerHTML = description;
		}
		
	}
*/	
}

function resizeImage()
{
/*	var containersOld = document.getElementById('mainContentOld').getElementsByTagName('a').length;
	var i;
	var sideSize = 200;
	for (i = 0; i < containersOld; i++)
	{
		var img = document.getElementById('imgContainerOld_' + i).getElementsByTagName('img')[0];

		var imgHeight = parseInt(img.clientHeight);
		if (imgHeight < sideSize)
		{
			var imgWidth = parseInt(img.style.width);
			var newImgWidth = imgWidth*(sideSize/imgHeight);
			var newImgLeft = (imgWidth - newImgWidth)/2; 
			img.style.height = sideSize + 'px';
			img.style.width = newImgWidth + 'px';
			img.style.left = newImgLeft + 'px';
		}
		else
		{
			var newImgTop = (sideSize - imgHeight)/2;		
			img.style.top = newImgTop + 'px';
		}
	}
*/	
	var containers = document.getElementById('mainContent').getElementsByTagName('a').length;
	var i;
	var sideSize = 200;
	for (i = 0; i < containers; i++)
	{
		var img = document.getElementById('imgContainer_' + i).getElementsByTagName('img')[0];

		var imgHeight = parseInt(img.clientHeight);
		if (imgHeight < sideSize)
		{
			var imgWidth = parseInt(img.style.width);
			var newImgWidth = imgWidth*(sideSize/imgHeight);
			var newImgLeft = (imgWidth - newImgWidth)/2; 
			img.style.height = sideSize + 'px';
			img.style.width = newImgWidth + 'px';
			img.style.left = newImgLeft + 'px';
		}
		else
		{
			var newImgTop = (sideSize - imgHeight)/2;		
			img.style.top = newImgTop + 'px';
		}
	}
//	document.getElementById('mainContentOld').style.visibility = 'visible';
	document.getElementById('mainContent').style.visibility = 'visible';
	document.getElementById('darkoverlay').style.display = 'none';
}

function cutString(str, width, el)
{
	var str2 = str;
	var len2 = str.length;
	var len1 = 0;
	var len = parseInt((len2 - len1) / 2);
	var widthCurrent = getTextDims(str, el).width;
	if (widthCurrent > width)
	{
    	while(true)
    	{
        	str2 = str.substr(0, len) + '...';
        	widthCurrent = getTextDims(str2, el).width;
        	if (widthCurrent < width)
        	{
            	len1 = len;
        	}
        	else if (widthCurrent > width)
        	{
            	len2 = len;
        	}
        	else
        	{
            	break;
        	}
        	if (len2 - len1 == 1)
        	{
            	str2 = str.substr(0, len1) + '...';
            	break;
        	}
        	len = parseInt((len2 - len1) / 2 + len1);
    	}
		return str2;
	}
	else
	{
   		return false; 	
	}
}

function getTextDims(str, element)
{
	var div = document.createElement('div');
	if ('undefined' != typeof(element.style.fontFamily))
	{
		div.style.fontFamily = element.style.fontFamily;
	}
	if ('undefined' != typeof(element.style.fontSize))
	{
		div.style.fontSize = element.style.fontSize;
	}
	if ('undefined' != typeof(element.style.fontWeight))
	{
		div.style.fontWeight = element.style.fontWeight;
	}	
	div.style.position = 'absolute';
	div.style.visibility = 'hidden';
	div.style.display = 'block';
	div.style.width = 'auto';
	div.style.height = 'auto';
    div.innerHTML = str;
    document.body.appendChild(div);
    var dims = {'width':div.clientWidth, 'height':div.clientHeight};
    document.body.removeChild(div);
    return dims;
}

function cutStringHeight(str, height, el, width)
{
	var str2 = str;
	var len2 = str.length;
	var len1 = 0;
	var len = parseInt((len2 - len1) / 2);
	var heightCurrent = getTextDimsHeight(str, el, width).height;

	if (heightCurrent > height)
	{
    	while(true)
    	{
        	str2 = str.substr(0, len) + '...';

        	heightCurrent = getTextDimsHeight(str2, el, width).height;
        	if (heightCurrent < height)
        	{
            	len1 = len;
        	}
        	else if (heightCurrent > height)
        	{
            	len2 = len;
        	}
        	else
        	{
            	break;
        	}
        	if (len2 - len1 == 1)
        	{
            	str2 = str.substr(0, len1) + '...';
            	break;
        	}
        	len = parseInt((len2 - len1) / 2 + len1);
    	}
	return str2;
	}
	else
	{
   		return false; 	
	}
}


function getTextDimsHeight(str, element, width)
{
    var div = document.createElement('div');
	if ('undefined' != typeof(element.style.fontFamily))
	{
		div.style.fontFamily = element.style.fontFamily;
	}
	if ('undefined' != typeof(element.style.fontSize))
	{
		div.style.fontSize = element.style.fontSize;
	}
	if ('undefined' != typeof(element.style.fontWeight))
	{
		div.style.fontWeight = element.style.fontWeight;
	}	
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.width = width + 'px';
    div.style.height = 'auto';
	div.style.wordWrap = 'break-word';
    div.innerHTML = str;
    document.body.appendChild(div);
    var dims = {'width':div.clientWidth, 'height':div.clientHeight};
    document.body.removeChild(div);
    return dims;
}


function getStyleProperty(el,styleProp)
{
	if (el.currentStyle)
    	var y = el.currentStyle[styleProp];
    else if (window.getComputedStyle)
    	var y = document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);
    return y;
}
