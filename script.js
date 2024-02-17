const playNowBtn = document.getElementById('play-now-btn');
playNowBtn.addEventListener('click', function () {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
})


// random

const random = Math.round(Math.random()*25);


//alphabets

const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const alpha = alphabets.split('');

const key = alpha[random];

const art = document.getElementById('artboard-key');
art.innerText = key;
const cng = document.getElementById(key);
cng.classList.add('bg-amber-500');
