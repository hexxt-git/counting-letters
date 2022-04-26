let input = prompt('input').split('').sort();
let letters = {};
display = [];
for ( let i in input ){
    input[i] != ' ' ? letters[input[i]] = 0 : letters['[space]'] = 0 ;
}
for ( let i in input ){
    input[i] != ' ' ? letters[input[i]]++ : letters['[space]']++;
}
for ( let i in letters){
    display.push( '<div class="item">', '<a style="color: #48F;">', i, ': </a>', letters[i], '</div>')
}

document.getElementById('div').innerHTML = display.join('');