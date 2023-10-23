let llink=document.querySelector("#in"),
short=document.querySelector("#inbtn"),
slink=document.querySelector("#out"),
copy=document.querySelector("#outbtn");

short.onclick=function(){
    slink.style.color="rgb(170, 170, 170)";
    slink.value="generating...";
    let link=llink.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then((resp) => resp.json())
    .then((value) => {
        slink.value=value.result.short_link;
        slink.style.color="white";
    })
    .catch((error) => {
        slink.value="Something went wrong :(";
        slink.style.color="white";
    })
}

copy.onclick=function(){
    navigator.clipboard.writeText(slink.value);
    copy.innerHTML = "<img src='img/tick.png'>";

    setTimeout(()=>{
        copy.innerHTML = "<img src='img/copy.png'>";
    },1000)
}
