const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
let output = document.getElementById("output");

function randomValue(value){
    return Math.floor(Math.random()*value);
}

function genPassword(){
    let length = 15;  
    let str = '';

    for(let i=0; i<length ; i++){
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }
    output.value = str;
}

function copyClipboard(){
    output.select();
    document.execCommand('copy');
    alert("Password Copied!");
}

genPassword();
