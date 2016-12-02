$.extend({
		loadServerData:function(s)
		{
			var d, loadOnce, timer, url, attrValue, img;
			var d = (document.querySelector('#'+s)!==undefined) ? document.querySelector('#'+s) : document.querySelector('.'+s);
			
			try 
			{				
				loadOnce = (d.attributes['set-load-once']!==undefined && d.attributes['set-load-once'].value=='1') ? 1 : 0;
				timer = (d.attributes['set-timer']!==undefined && d.attributes['set-timer']>=5000) ? d.attributes['set-timer'].value : 5000;			
				
				url = d.attributes['set-url'].value;
				attrValue = (d.attributes['set-load-text']!==undefined) ? d.attributes['set-load-text'].value : 'Please wait, we are fetching your data!';
				
				if(d.attributes['set-load-img']!==undefined)
				{
					img = document.createElement("img");
					img.id = 'benaya_img_'+d;
					img.src = d.attributes['set-load-img'].value;
					attrValue = img;
				}				
				
				if(loadOnce=='1')
				{
					
					d.append(attrValue);					
					setInterval(function() { $.getResultSet(d,url,attrValue) },timer);					
				} else {
					$.getResultSet(d,url,attrValue);
				} 
				
			} catch(err) {
				
				console.log("fail to reach"+err);
			}
					
		},
		getResultSet:function(d,url,attrValue)
		{
			d.innerHTML = '';
			
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			console.log(this.readyState+'=>');
				d.append(attrValue);
				
				if (this.readyState == 4 && this.status == 200) {
					var result = (xhttp.responseText);
					d.innerHTML =  result;
				}
			};
			
			xhttp.open("GET",url, true);
			xhttp.send()
		}
});
