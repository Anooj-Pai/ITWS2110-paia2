This lab was quite difficult in some areas like finding the optimizations to make the site better. The changes themselfs were not bad but finding them was tough at times. I eventually came up with these:

1)Split up the JS and CSS into seperate files and defered the javascript at the end of the html page. 

2)Combined repetitive CSS and deleted code that was not relevant

3)I cached most of the expensive operations such as the GetElementByID by putting them into variable so they dont have to be called over and over again. I removed any code that was useless. And changed some if statement chains into switches.

4)I created a sprite sheet with all the images to save assets

5)Minimized the javascript and css

6)Optimized the HTML by removing unneeded tags and divs

7)I changed the layout of the site to make it cleaner and more appealing for the user.