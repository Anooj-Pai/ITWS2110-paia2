var all,daily_play,found,guess,points,rank1,rank2,rank3,rank4,rank5,rank6,rank7,rank8,rank9,replaying,total,todaytotal,yesterdaytotal,win,words,todaywords,yesterdaywords,dark,foundlist=[],letters=[],todayletters=[],wordlist=[],todaywordlist=[],yesterdaywordlist=[],comb1=document.getElementById("comb1"),comb2=document.getElementById("comb2"),comb3=document.getElementById("comb3"),comb4=document.getElementById("comb4"),comb5=document.getElementById("comb5"),comb6=document.getElementById("comb6"),comb7=document.getElementById("comb7"),p1=document.getElementById("p1"),p2=document.getElementById("p2"),p3=document.getElementById("p3"),p4=document.getElementById("p4"),p5=document.getElementById("p5"),p6=document.getElementById("p6"),p7=document.getElementById("p7"),noMessage=document.getElementById("no-message"),pangram=document.getElementById("pangram"),alreadyFound=document.getElementById("already-found"),centerLetter=document.getElementById("center-letter"),tooShort=document.getElementById("too-short"),notInList=document.getElementById("not-in-list"),guess=document.getElementById("guess");function darkmode(){if(1==dark){for(var e=document.querySelectorAll("*"),t=document.querySelector(".nav"),n=document.querySelector(".nav-links a"),o=0;o<e.length;o++)"fg"!=e[o].className&&"bg"!=e[o].className&&(e[o].style.background="#fbfcff",t.style.background="#FFA701",n.style.background="#FFA701",e[o].style.color="#243b4a");dark=0,localStorage.setItem("useDarkMode",1)}else{for(var e=document.querySelectorAll("*"),o=0;o<e.length;o++)"fg"!=e[o].className&&"bg"!=e[o].className&&(e[o].style.background="#111111",e[o].style.color="#9e9e9e");dark=1,localStorage.setItem("useDarkMode",0)}}function type(e,t){noMessage.style.display="inline",pangram.style.display="none",alreadyFound.style.display="none",centerLetter.style.display="none",tooShort.style.display="none",notInList.style.display="none",document.getElementById("comb"+t).style.height="80px",document.getElementById("comb"+t).style.width="80px",document.getElementById("comb"+t).style.left=parseInt(document.getElementById("comb"+t).style.left)+10+"px",document.getElementById("comb"+t).style.top=parseInt(document.getElementById("comb"+t).style.top)+10+"px",guess.value=document.getElementById("guess").value+e}function untype(){comb1.style.height="100px",comb1.style.width="100px",comb1.style.left="1px",comb1.style.top="51px",comb2.style.height="100px",comb2.style.width="100px",comb2.style.left="80px",comb2.style.top="1px",comb3.style.height="100px",comb3.style.width="100px",comb3.style.left="159px",comb3.style.top="51px",comb4.style.height="100px",comb4.style.width="100px",comb4.style.left="1px",comb4.style.top="149px",comb5.style.height="100px",comb5.style.width="100px",comb5.style.left="80px",comb5.style.top="199px",comb6.style.height="100px",comb6.style.width="100px",comb6.style.left="159px",comb6.style.top="149px",comb7.style.height="100px",comb7.style.width="100px",comb7.style.left="80px",comb7.style.top="100px"}function getLetterPic(e,t,n,o){var s=t.charCodeAt(0);if("7"==t[0])var s=t.charCodeAt(1);var n=-60*(s-=97);"7"==t[0]&&(n-=1560),e.style.backgroundPosition=n+"px 0px"}function display(){var e=0;getLetterPic(p1,letters[0]),p1.alt=letters[0],comb1.alt=letters[0],p1.style.left="21px",p1.style.top="51px",p1.ontouchstart=function(){e=1,type(letters[0],1)},p1.onmousedown=function(){1!=e&&type(letters[0],1)},p1.style.display="block",p1.onmouseup=function(){untype()},p1.ondragend=function(){untype()},p1.ontouchend=function(){untype()},p1.ontouchcancel=function(){untype()},getLetterPic(p2,letters[1]),p2.alt=letters[1],comb2.alt=letters[1],p2.style.left="100px",p2.style.top="1px",p2.ontouchstart=function(){e=1,type(letters[1],2)},p2.onmousedown=function(){1!=e&&type(letters[1],2)},p2.style.display="block",p2.onmouseup=function(){untype()},p2.ondragend=function(){untype()},p2.ontouchend=function(){untype()},p2.ontouchcancel=function(){untype()},getLetterPic(p3,letters[2]),p3.alt=letters[2],comb3.alt=letters[2],p3.style.left="179px",p3.style.top="51px",p3.ontouchstart=function(){e=1,type(letters[2],3)},p3.onmousedown=function(){1!=e&&type(letters[2],3)},p3.style.display="block",p3.onmouseup=function(){untype()},p3.ondragend=function(){untype()},p3.ontouchend=function(){untype()},p3.ontouchcancel=function(){untype()},getLetterPic(p4,letters[3]),p4.alt=letters[3],comb4.alt=letters[3],p4.style.left="21px",p4.style.top="149px",p4.ontouchstart=function(){e=1,type(letters[3],4)},p4.onmousedown=function(){1!=e&&type(letters[3],4)},p4.style.display="block",p4.onmouseup=function(){untype()},p4.ondragend=function(){untype()},p4.ontouchend=function(){untype()},p4.ontouchcancel=function(){untype()},getLetterPic(p5,letters[4]),p5.alt=letters[4],comb5.alt=letters[4],p5.style.left="100px",p5.style.top="199px",p5.ontouchstart=function(){e=1,type(letters[4],5)},p5.onmousedown=function(){1!=e&&type(letters[4],5)},p5.style.display="block",p5.onmouseup=function(){untype()},p5.ondragend=function(){untype()},p5.ontouchend=function(){untype()},p5.ontouchcancel=function(){untype()},getLetterPic(p6,letters[5]),p6.alt=letters[5],comb6.alt=letters[5],p6.style.left="179px",p6.style.top="149px",p6.ontouchstart=function(){e=1,type(letters[5],6)},p6.onmousedown=function(){1!=e&&type(letters[5],6)},p6.style.display="block",p6.onmouseup=function(){untype()},p6.ondragend=function(){untype()},p6.ontouchend=function(){untype()},p6.ontouchcancel=function(){untype()},getLetterPic(p7,letters[6]),p7.alt="center: "+letters[6][1],comb7.alt="center: "+letters[6][1],p7.style.left="100px",p7.style.top="100px",p7.ontouchstart=function(){e=1,type(letters[6][1],7)},p7.onmousedown=function(){1!=e&&type(letters[6][1],7)},p7.style.display="block",p7.onmouseup=function(){untype()},p7.ondragend=function(){untype()},p7.ontouchend=function(){untype()},p7.ontouchcancel=function(){untype()}}function update_rank(){var e;points>=rank9?(0==win&&(alert("You earned the rank of Queen Bee!\n\nCan you find all the words?"),win=1),e="Queen Bee!"):e=points>=rank8?"Outstanding":points>=rank7?"Marvellous":points>=rank6?"Superb":points>=rank5?"Excellent":points>=rank4?"Skilled":points>=rank3?"Fine":points>=rank2?"Novice":"Newbie",document.getElementById("rank-update").innerHTML=e}function set_rank(){rank1=0,rank2=Math.floor(.02*total),rank3=Math.floor(.05*total),rank4=Math.floor(.08*total),rank5=Math.floor(.15*total),rank6=Math.floor(.25*total),rank7=Math.floor(.4*total),rank8=Math.floor(.5*total),rank9=Math.floor(.7*total)}function save_word(){localStorage.setItem("foundwords",JSON.stringify(foundlist))}function add_points(){var e=0,t=0,n=0,o=0,s=0,l=0,r=0,a=0;if(1===daily_play&&save_word(),(r=guess.length)<7){4==r&&(r=1),points+=r;return}for(r=0;r<guess.length;){for(a=0;a<7;a++)if(guess[r]==letters[a])switch(a){case 0:e=1;break;case 1:t=1;break;case 2:n=1;break;case 3:o=1;break;case 4:s=1;break;default:l=1}r+=1}if(1==e&&1==t&&1==n&&1==o&&1==s&&1==l){points=points+guess.length+7,document.getElementById("no-message").style.display="none",document.getElementById("pangram").style.display="inline";return}points+=guess.length}function found_word(){var e;for(e=0;e<found;e++)if(guess==foundlist[e])return document.getElementById("no-message").style.display="none",document.getElementById("already-found").style.display="inline",1;return foundlist.push(guess),found+=1,add_points(),document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),update_rank(),found==words&&(alert("Congratulations! You found all the words!"),all=1),0}function check(){var e,t=0;for(noMessage.style.display="inline",pangram.style.display="none",alreadyFound.style.display="none",centerLetter.style.display="none",tooShort.style.display="none",notInList.style.display="none",0===replaying?(g=guess.value.toLowerCase(),document.getElementById("player-guess").reset()):(""==guess.value&&(guess.value=" "),g=guess.value.toLowerCase(),document.getElementById("player-guess").reset()),e=0;e<g.length;e++)"7"+g[e]==letters[6]&&(t=1);if(g.length<4)return noMessage.style.display="none",tooShort.style.display="inline",1;if(0==t)return noMessage.style.display="none",centerLetter.style.display="inline",1;for(e=0;e<words;e++)if(g==wordlist[e])return found_word();return noMessage.style.display="none",notInList.style.display="inline",1}function replay_words(){var e,t;for(replaying=1,t=JSON.parse(localStorage.getItem("foundwords")),localStorage.removeItem("foundwords"),e=0;e<t.length;e++)if(guess=t[e],1==check()){for(localStorage.removeItem("foundwords"),e=0;e<found;e++)foundlist.pop();all=0,found=0,points=0,rank="Newbie",win=0,noMessage.style.display="inline",pangram.style.display="none",alreadyFound.style.display="none",centerLetter.style.display="none",tooShort.style.display="none",notInList.style.display="none",replaying=0;return}noMessage.style.display="inline",pangram.style.display="none",alreadyFound.style.display="none",centerLetter.style.display="none",tooShort.style.display="none",notInList.style.display="none",replaying=0}function daily(){var e;for(e=0,daily_play=1;e<found;e++)foundlist.pop();all=0,found=0,points=0,rank="Newbie",replaying=0,win=0,document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),document.getElementById("rank-update").innerHTML=rank,document.getElementById("yesterday-or-random").innerHTML="Yesterday's answers",document.getElementById("random-answers").style.display="none",document.getElementById("restart-daily-button").style.visibility="hidden",document.getElementById("update-random").innerHTML="",noMessage.style.display="inline",pangram.style.display="none",alreadyFound.style.display="none",centerLetter.style.display="none",tooShort.style.display="none",notInList.style.display="none",p1.style.display="none",p2.style.display="none",p3.style.display="none",p4.style.display="none",p5.style.display="none",p6.style.display="none",p7.style.display="none",letters[0]=todayletters[0],letters[1]=todayletters[1],letters[2]=todayletters[2],letters[3]=todayletters[3],letters[4]=todayletters[4],letters[5]=todayletters[5],letters[6]=todayletters[6],words=todaywords,total=todaytotal,wordlist=todaywordlist,set_rank(),!0===localStorage.hasOwnProperty("foundwords")&&replay_words(),document.getElementById("update-random").innerHTML=yesterdaywordlist.join("<br />")+"<br /><br />Total words:  "+yesterdaywords+"<br />Total points: "+yesterdaytotal+"<br />Points for Queen Bee: "+Math.floor(.7*yesterdaytotal),display()}async function get_yesterday(){var e=new XMLHttpRequest;e.open("GET","https://freebee.fun/cgi-bin/yesterday",!0),e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);yesterdaywords=e.words,yesterdaytotal=e.total,yesterdaywordlist=e.wordlist}},e.send()}async function get_today(){var e=new XMLHttpRequest;e.open("GET","https://freebee.fun/cgi-bin/today",!0),e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);todayletters[0]=e.letters[0],todayletters[1]=e.letters[1],todayletters[2]=e.letters[2],todayletters[3]=e.letters[3],todayletters[4]=e.letters[4],todayletters[5]=e.letters[5],todayletters[6]="7"+e.center,todaywords=e.words,todaytotal=e.total,todaywordlist=e.wordlist,daily()}},e.send()}function shuffle(){var e,t,n;for(e=5;e>0;e--)n=letters[t=Math.floor(Math.random()*(e+1))],letters[t]=letters[e],letters[e]=n;display()}function random(){var e,t=new XMLHttpRequest;for(e=0,daily_play=0;e<found;e++)foundlist.pop();all=0,found=0,points=0,rank="Newbie",win=0,document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),document.getElementById("rank-update").innerHTML=rank,document.getElementById("yesterday-or-random").innerHTML="Answers",document.getElementById("update-random").innerHTML="",noMessage.style.display="inline",pangram.style.display="none",alreadyFound.style.display="none",centerLetter.style.display="none",tooShort.style.display="none",notInList.style.display="none",p1.style.display="none",p2.style.display="none",p3.style.display="none",p4.style.display="none",p5.style.display="none",p6.style.display="none",p7.style.display="none",t.open("GET","https://freebee.fun/cgi-bin/random",!0),t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);letters[0]=e.letters[0],letters[1]=e.letters[1],letters[2]=e.letters[2],letters[3]=e.letters[3],letters[4]=e.letters[4],letters[5]=e.letters[5],letters[6]="7"+e.center,words=e.words,total=e.total,wordlist=e.wordlist,set_rank(),display(),document.getElementById("random-answers").style.display="block",document.getElementById("restart-daily-button").style.visibility="visible"}},t.send()}function show_random(){document.getElementById("update-random").innerHTML=wordlist.join("<br />")+"<br /><br />Total words:  "+words+"<br />Total points: "+total+"<br />Points for Queen Bee: "+Math.floor(.7*total)}function delete_letter(){var e=guess.value,t=e.length;e=e.slice(0,t-1)+e.slice(t,t),guess.value=e}window.onload=function(){get_yesterday(),get_today(),dark=!0===localStorage.hasOwnProperty("useDarkMode")?Number(localStorage.getItem("useDarkMode")):1,darkmode()};