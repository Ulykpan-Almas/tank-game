x=0;
y=0;
rotated =2;
y1=y;
x1=x;
x2=1330;
y2=594;
barwidth=0;
bluescore=0;
greenscore=0;
won=0;
function right(){
	if(bluescore==20 && won==0){
		alert("BLUE WON!!!")
		won=1;
	}
	x+=1
	if(x>1360){
		x=-20
	}
	document.getElementById("tank").innerHTML="<img src='r.png' style='width:30px;'>";
	document.getElementById("tank").style.marginLeft=x+"px";
	if(y>randomy-25 && y<randomy+25 && x>randomx-25 && x<randomx+25){
		bluescore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("bp").innerHTML=bluescore;
}
function right2(){
	if(greenscore==20 && won==0){
		alert("GREEN WON!!!")
		won=1;
	}
	x2+=1
	if(x2>1360){
		x2=-20
	}
	if(y2>randomy-25 && y2<randomy+25 && x2>randomx-25 && x2<randomx+25){
		greenscore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("gp").innerHTML=greenscore;
	document.getElementById("tank2").src='r2.png';
	document.getElementById("tank2").style.marginLeft=x2+"px";
}
function left(){
	if(bluescore==20 && won==0){
		alert("BLUE WON!!!")
		won=1;
	}
	x-=1;
	if(x<-20){
		x=1360
	}
	document.getElementById("tank").innerHTML="<img src='l.png'  style='width:30px;'>";
	document.getElementById("tank").style.marginLeft=x+"px";
	if(y>randomy-25 && y<randomy+25 && x>randomx-25 && x<randomx+25){
		bluescore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("bp").innerHTML=bluescore;
}
function left2(){
	if(greenscore==20 && won==0){
		alert("GREEN WON!!!")
		won=1;
	}
	x2-=1;
	if(x2<-20){
		x2=1360
	}
	if(y2>randomy-25 && y2<randomy+25 && x2>randomx-25 && x2<randomx+25){
		greenscore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("gp").innerHTML=greenscore;
	document.getElementById("tank2").src="l2.png";
	document.getElementById("tank2").style.marginLeft=x2+"px";
}
function down(){
	if(bluescore==20 && won==0){
		alert("BLUE WON!!!")
		won=1;
	}
	y+=1;
	if(y>620){
		y=-20;
	}
	document.getElementById("tank").innerHTML="<img src='d.png' style='width:30px;'>";
	document.getElementById("tank").style.marginTop=y+"px";
	if(y>randomy-25 && y<randomy+25 && x>randomx-25 && x<randomx+25){
		bluescore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("bp").innerHTML=bluescore;
}
function down2(){
	if(greenscore==20 && won==0){
		alert("GREEN WON!!!")
		won=1;
	}
	y2+=1;
	if(y2>620){
		y2=-20;
	}
	if(y2>randomy-25 && y2<randomy+25 && x2>randomx-25 && x2<randomx+25){
		greenscore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("gp").innerHTML=greenscore;
	document.getElementById("tank2").src="d2.png";
	document.getElementById("tank2").style.marginTop=y2+"px";
}
function up(){
	if(bluescore==20 && won==0){
		alert("BLUE WON!!!")
		won=1;
	}
	y-=1;
	if(y<-20){
		y=620;
	}
	if(y>randomy-25 && y<randomy+25 && x>randomx-25 && x<randomx+25){
		bluescore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("tank").innerHTML="<img src='u.png' style='width:30px;'>";
	document.getElementById("tank").style.marginTop=y+"px";
	document.getElementById("bp").innerHTML=bluescore;
}
function up2(){
	if(greenscore==20 && won==0){
		alert("GREEN WON!!!")
		won=1;
	}
	y2-=1;
	if(y2<-20){
		y2=590;
	}
	if(y2>randomy-25 && y2<randomy+25 && x2>randomx-25 && x2<randomx+25){
		greenscore+=1;
		randomx=Math.floor(Math.random()*1360);
		randomy=Math.floor(Math.random()*600);
		document.getElementById("random").style.marginLeft=randomx+"px";
		document.getElementById("random").style.marginTop=randomy+"px";
	}
	document.getElementById("gp").innerHTML=greenscore;
	document.getElementById("tank2").src='u2.png';
	document.getElementById("tank2").style.marginTop=(y2)+"px";
}
function bulletdown() {
	bullet = document.getElementById("bullet");
	y1+=1;
	barwidth+=0.2;
	document.getElementById("bar").style.marginTop=(550-y1)+"px";
	document.getElementById("bar").style.width=barwidth+"px";
	bullet.src='bulletdown.png';
	bullet.style.marginTop=y1+"px"
	if(barwidth>126){
		document.getElementById("bar").style.width="0px";
	}
	document.getElementById("tank2").style.marginTop=(y2-y1)+"px"
}
function bulletup() {
	document.getElementById("bar").style.marginTop=(550-y1)+"px";
	bullet = document.getElementById("bullet");
	barwidth+=0.2;
	if(barwidth>125.9){
		barwidth=0;
	}
	y1-=1;
	bullet.src='bulletup.png';
	bullet.style.marginTop=y1+"px"
	document.getElementById("bar").style.width=barwidth+"px";
	document.getElementById("tank2").style.marginTop=(y2-13)+"px";
}
function bulletright() {
	barwidth+=0.1;
	bullet = document.getElementById("bullet");
	if(barwidth>137.9){	
		barwidth=0;
	}
	x1+=1;
	bullet.src='bulletright.png';
	bullet.style.marginLeft=x1+"px"
	document.getElementById("bar").style.width=barwidth+"px";
	document.getElementById("bar").style.marginTop=(550-u)+"px";
	document.getElementById("tank2").style.marginLeft=(x2)+"px";
	document.getElementById("tank2").style.marginTop=(y2-(30+y))+"px";
}
function bulletLeft() {
	barwidth+=0.1;
	if(barwidth>137.9){	
		barwidth=0;
	}
	bullet = document.getElementById("bullet");
	x1-=1;
	bullet.src='bulletleft.png';
	bullet.style.marginLeft=x1+"px"
	document.getElementById("bar").style.width=barwidth+"px";
	document.getElementById("bar").style.marginTop=(550-u)+"px";
	document.getElementById("tank2").style.marginTop=(y2-30-y)+"px";
	document.getElementById("tank2").style.marginLeft=(x2)+"px";
}
function check(event){
	var e = event.keyCode;
	if(e==83){
		rotated = 2;
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {down()},z*i);
	}
	}
	else if(e==40){
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {down2()},z*i);
	}
	}else if(e==87){
		rotated=0;
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {up()},z*i);
	}
	}else if(e==38){
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {up2()},z*i);
	}
	}else if(e==68){
		rotated=1;
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {right()},z*i);
	}
	}else if(e==39){
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {right2()},z*i);
	}
	}
	else if(e==65){
		rotated=3;
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {left()},z*i);
	}
	}
	else if(e==37){
		z=10;
		for(i=1;i<24;i++){
		let idSetTimeout1 = setTimeout((arg) => {left2()},z*i);
	}
	}
	/*else if(e==32){
		if(rotated===2){
			barwidth=0;
			bullet = document.getElementById("bullet");
			y1=y;
			bullet.style.marginLeft = x+"px";
			bullet.style.display ="inline";
			for(i=0;i<630;i++){let idSetTimeout1 = setTimeout((arg) => {bulletdown()},i*1);}
		}if(rotated===0){
			barwidth=0;
			bullet = document.getElementById("bullet");
			y1=y;
			bullet.style.marginLeft = x+"px";
			bullet.style.display ="inline";
			for(i=0;i<630;i++){let idSetTimeout1 = setTimeout((arg) => {bulletup()},i*1);}
		}if(rotated==1){
			u=y;
			barwidth=0;
			bullet = document.getElementById("bullet");
			x1=x;
			bullet.style.marginTop = y+"px";
			bullet.style.display ="inline";
			for(i=0;i<1380;i++){let idSetTimeout1 = setTimeout((arg) => {bulletright()},i*1);}
		}if(rotated==3){
			u=y;
			bullet = document.getElementById("bullet");
			x1=x;
			bullet.style.marginTop = y+"px";
			bullet.style.display ="inline";
			for(i=0;i<1380;i++){let idSetTimeout1 = setTimeout((arg) => {bulletLeft()},i*1);}
		}
	}
	*/
}
function random(){
	randomx = Math.floor(Math.random()*1360);
	randomy = Math.floor(Math.random()*600);
	document.getElementById("random").style.marginTop=randomy+"px";
	document.getElementById("random").style.marginLeft=randomx+"px";
}