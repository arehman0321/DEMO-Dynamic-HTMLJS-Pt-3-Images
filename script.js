var img = ["https://media.giphy.com/media/NsEU83HMPEM2ekYwCj/giphy.gif", "https://media.giphy.com/media/WjldrOwZZ3EpW/giphy.gif", "https://media.giphy.com/media/f6hS7a6Z1D10CGexts/giphy.gif", "https://media.giphy.com/media/5BURk7bDEslz8NotfS/giphy.gif", "https://media.giphy.com/media/1woBYN2Vdwa1f3mtem/giphy.gif", "https://media.giphy.com/media/Nn5BoHlt9FGko/giphy.gif", "https://media.giphy.com/media/JMpdPpZuVt49q/giphy.gif", "https://media1.giphy.com/media/TFVOUGwnJnO8g/giphy.webp?cid=790b76119131720d3c7cab7077a56eadd38e92d04848954f&rid=giphy.webp", "http://giphygifs.s3.amazonaws.com/media/de5bARu0SsXiU/giphy.gif"],
    head = ["Schmidt After An Accident", "Smort Boi", "Tough Love", "Pepega", "KO?", "Another Smort Boi", "Yes?", "Another Smort Boi", "Pretty Accurate"],
    num = img.length/3;
function html(){
    for(var i = 0; i < img.length; i-=-1){
        if(i < num){
            document.querySelector(".container1").innerHTML += `<div class="profile"><img src="${img[i]}"><h1>${head[i]}</h1></div>`;
            console.log("one");
        }else if(i < num*2){
            document.querySelector(".container2").innerHTML += `<div class="profile"><img src="${img[i]}"><h1>${head[i]}</h1></div>`;
            console.log("two");
        }else if(i < num*3){
            document.querySelector(".container3").innerHTML += `<div class="profile"><img src="${img[i]}"><h1>${head[i]}</h1></div>`;
            console.log("three");
        }
    }
}
function print(){
    html();
}
print();