Quiz 2:
Sources: Lab 8 framework I built

For this quiz the coding section actually went pretty smoothly. I opted out of doing lab 8 so I didn't get to have that perfectly working for the quiz.
This was ok though because I made a small outline of the lab that worked well enough to get me going on this quiz.

For my solution I used the CAS system for the user authentication, this made it much easier and safer for my site. Then on my home page I have the dynamically
loaded side bar on the left with all of the lectures in my json file that were given to us. I used javascript to display them by first parsing the json object down into 
an array and read each element to create buttons that would display the lecture. When clicked the JS script creates 3 divs, one for the Title, one for the Description, and 
one for the link. Then on the right hand side of my home screen I have 4 buttons, one for Archiving, refreshing, deleting and logging out. Each of these link to a php file that does the respective action.

Archive: I first connect to my database, then I parse the json file, loop through it and finally create my sql queries to insery the data into my database
Delete: I connect to my database and just have a simple command to delete all the data in my MBE table
Refresh: reloads the screen
Log Out: calls the CAS log out page