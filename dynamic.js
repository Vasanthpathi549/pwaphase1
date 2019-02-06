function getfile(file,callback)
{
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function()
	{
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
	}
	htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
})

var left=document.querySelector(".left");
function profile(p){
    var pimg=document.createElement("img");
    pimg.src=p.img;
    left.appendChild(pimg);

    var ph3=document.createElement("h3");
    ph3.textContent=p.name;
    left.appendChild(ph3);

    var phr=document.createElement("hr");
	left.appendChild(phr);

    var proll=document.createElement("p");
    proll.textContent=p.roll;
    left.appendChild(proll);

    var pinsti=document.createElement("p");
    pinsti.textContent=p.institution;
    left.appendChild(pinsti);

    var pplace=document.createElement("p");
    pplace.textContent=p.place;
    left.appendChild(pplace);
}

var right=document.querySelector(".right");
function career(c){
	var mh=document.createElement("h1");
	mh.innerHTML="Resume";
	right.appendChild(mh);
	var car=document.createElement("h2");
	car.innerHTML="Career Objective:";
	right.appendChild(car);
	var chr=document.createElement("hr");
	right.appendChild(chr);
	var cp=document.createElement("p");
	cp.textContent=c.info;
	right.appendChild(cp);
}
    function education(e){
	var ed=document.createElement("h2");
	ed.innerHTML="Educational Details:";
	right.appendChild(ed);
	var thr=document.createElement("hr");
	right.appendChild(thr);

	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>s.no</td><td>Degree</td><td>Institution</td><td>Year of passing</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++)
	{
       tr2=tr2+"<tr><td>"+e[i].s+"</td><td>"+e[i].degree+"</td><td>"+e[i].institution+"</td><td>"+e[i].yop+"</td></tr>";
	}
	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);
   }

   function languages(l)
   {
   	var rl=document.createElement("h2");
   	rl.innerHTML="Languages:";
   	right.appendChild(rl);
   	var lhr=document.createElement("hr");
	right.appendChild(lhr);
	var lang=document.createElement("ul");
	right.appendChild(lang);
	for(i=0;i<l.length;i++)
	{
		var su=document.createElement("li");
		su.textContent=l[i].lang;
		lang.appendChild(su);
	}
   }