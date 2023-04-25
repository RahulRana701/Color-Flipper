const hex=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
// we will generate a hex color form this , hex color start from # and including it , it have 6 digits;
const btx=document.getElementById('btns');
const color2=document.querySelector('.color');

btx.addEventListener('click',function () {
    let hexcol='#';
    for (let i = 0; i < 6; i++) {
        hexcol+=hex[getrandomnumber()];
    }
    document.body.style.backgroundColor=hexcol
    color2.textContent=hexcol;

});
function getrandomnumber() {
    return Math.floor(Math.random()*hex.length);
}