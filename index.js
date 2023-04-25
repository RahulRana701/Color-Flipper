const colors = ['green', 'red', 'rgb(133,122,200)', '#f15025'];

const btx = document.getElementById('btns');
const color2 = document.querySelector('.color');

btx.addEventListener('click',function() {
    const randomNumber = getrandomnumber();
    document.body.style.backgroundColor =  colors[randomNumber];
    color2.textContent =  colors[randomNumber];
});


// this math.random will give us random values but in decimal hence we will multiply it wiht our array length and
// then put it in floor to get whole number within array length
function getrandomnumber() {
    return Math.floor(Math.random()*colors.length);
}