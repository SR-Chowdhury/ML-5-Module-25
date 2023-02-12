/**
 * document.getElementsByTagName('tagName')
 */

let output1 = document.getElementsByTagName('h1');
let output2 = document.getElementsByTagName('h1')[0];
let output3 = document.getElementsByTagName('h1')[0].innerText;
let output4 = document.getElementsByTagName('h1')[0].innerHTML;

// console.log('document.getElementsByTagName(tagName)');
// console.log(output1);
// console.log(output2);
// console.log(output3);
// console.log(output4);

/**
 * document.getElementById('id')
 */

let output5 = document.getElementById('get-ID');
let output6 = document.getElementById('get-ID').innerText;
let output7 = document.getElementById('get-ID').innerHTML;

// console.log('\n document.getElementById(idName)');
// console.log(output5);
// console.log(output6);
// console.log(output7);

/**
 * document.getElementsByClassName('className')
 */

let output8 = document.getElementsByClassName('five-way');
let output9 = document.getElementsByClassName('five-way')[0].innerText;
let output10 = document.getElementsByClassName('five-way')[0].innerHTML;

// console.log('\n document.getElementsByClassName(className)');
// console.log(output8);
// console.log(output9);
// console.log(output10);

/**
 * document.getAttribute('class / id')
 * N>B> If you want to get ID attribute than first run let x =  document.getElementsByClassName('className') and x.getAttribute('id'); 
 * N>B> If you want to get Class attribute than first run let x =  document.getElementsById('id') and x.getAttribute('class'); 
 */

let getAttrByID = document.getElementById('five-way-id');
let output11 = getAttrByID.getAttribute('class');

let getAttrByClass = document.getElementsByClassName('five-way');
let output111 = getAttrByID.getAttribute('id');


/**
 * element.classList / classList.add() / classList.remove()
 */

const t = document.getElementById('five-way-id');
t.classList.add('1-example', '2-example');
let output12 = t.classList;
// console.log(output12);

t.classList.remove('0-example');
let output13 = t.classList;
// console.log(output13);


/**
 * element.setAttribute (attr, value);
 */

const t1 = document.getElementById('five-way-id');
t1.setAttribute('title', 'See, I am working');


/**
 * querySelctorAll
 */

const output14 = document.querySelectorAll('li')[0].innerText;
console.log(output14);

/**
 * querySectro('#id / .className');
 */

const output15 = document.querySelector('#five-way-id').innerText;
console.log(output15);
