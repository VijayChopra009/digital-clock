let hours=document.getElementById("hours");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(() => {
    let time=new Date();

    hours.innerHTML= (time.getHours()<10?"0":"")+time.getHours();
    min.innerHTML=  (time.getMinutes()<10?"0":"")+time.getMinutes();
    sec.innerHTML=  (time.getSeconds()<10?"0":"")+time.getSeconds();
}, 1000); 

