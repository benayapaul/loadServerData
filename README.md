# loadServerData
Fetch and interact with server data without writing any code — simply use tag attributes to handle it for you.
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

**`set-timer`**
This attribute triggers a request to the server after the specified number of milliseconds. If the value is below 5000, it defaults to 5000 milliseconds to reduce server load.

**`set-url`**
Specifies the server URL from which data should be fetched.

**`set-load-text`**
Displays a text message when the response is delayed. This attribute is optional. If not provided, the default message **"Please wait, we are fetching your data!"** will be shown.

**`set-load-img`**
Displays an image during response delays. This attribute is optional. If not provided, the default image or message **"Please wait, we are fetching your data!"** will appear.

**`set-load-once`**
Determines whether the request should run only once or multiple times. Set to `1` for a single execution and `0` for repeated execution.
