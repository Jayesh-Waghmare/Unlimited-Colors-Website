// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"; // hex code colors range
    let color = '#'
    for(let i=0; i<6; i++){ // #FFFFFF
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;
// start changing color function
const startChangingColor = function(){
    // if interval is null then only add change the background color by changing the color continuously after one second
    if(!intervalId) intervalId = setInterval(changeBgColor, 1000); // to optimise

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

// stop changing color function
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

// fetch the start button and it should start changing color when clicked
document.querySelector('#start').addEventListener('click', startChangingColor);

// fetch the stop button and it should stop changing color when clicked
document.querySelector('#stop').addEventListener('click', stopChangingColor);