# loadServerData
Set & Call the server data without coding, tag attribute will work for you.
---

##Installation
Include the loadServerData.js after including the jQuery

```html
<script src="/path/to/loadServerData.js"></script>
```
or

Install using npm
```
npm install loadserverdata
```

You need create tag based on the set attribute.

```html
<div id="server-call" set-timer='5000' set-url='server-file.php' set-load-text='Please wait loading...'></div>
<p id="pId" set-timer='5000' set-url='server-file.php' set-load-img='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' set-load-once='1'></p>
```



#Example : 

```html
<html>
<head>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="loadServerData.js"></script>
</head>

<body>
	<div id="server-call" set-timer='5000' set-url='server-file.php' set-load-text='Please wait loading...'></div>
	
	<script>
		$.loadServerData("server-call");
	</script>
	
</body>
</html>
```

 
set-timer
- attribute trigger the server where given seconds.
  If the timer is below 5000 it will set default time as 5000 to avoid the server load.
	
set-url
- attribute fetch the data from the server.

set-load-text
- attribute display text content whenever response is delay.
  It's a optional if the attribute not set it will load default value "Please wait, we are fetching your data!"
  
set-load-img
- attribute display image whenever response is delay.
  It's a optional if the attribute not set it will load default value "Please wait, we are fetching your data!"
  
set-load-once
- attribute run at once or multi times 0/1.  