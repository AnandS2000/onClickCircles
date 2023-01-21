// let body = document.querySelector("body")
// body.addEventListener('click',function(event){
//     let div = document.createElement('div');
//     div.classList.add('circle')
//     div.style.left = event.clientX + 'px';
//     div.style.top = event.clientY + 'px';
//     body.appendChild(div);
// })


let body = document.querySelector("body");
body.addEventListener("click", function(event) {
  let element = document.createElement("div");
  element.classList.add("circle");
  
  element.style.left = event.clientX -50 + "px";
  element.style.top = event.clientY -50+ "px";
  element.style.background = colorGenerator();
  body.appendChild(element);
  
  setTimeout(function() {
    element.style.transform = "scale(1)";
  }, 50);
  
  setTimeout(function() {
    body.removeChild(element);
  }, 3000);
});

// Random Color Generator
let colorGenerator = function(){
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    // Converting to Hex value
    randomNumber = randomNumber.toString(16);
    // padStart/padEnd
    let randColor = randomNumber.padStart(6, 0);
    let colorCode ='#' +  randColor.toUpperCase();
    console.log(colorCode);
    return colorCode;
}