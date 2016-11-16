# loadServerData
Load the Server Data without coding, just include jQuery &amp; loadServerData.js plugin it will automatically load the data.

# How it's work

loadServerData work based on the attributes which embed into HTML tag.

<div id="divId" set-timer='5000' set-url='1.php' set-load-text='Please wait loading...'></div>
<p id="pId" set-timer='5000' set-url='1.php' set-load-img='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' set-load-once='1'></p>

Above div tag work based on the attributes value.
 
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

