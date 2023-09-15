// let note_maths = Number(prompt("entrer la moyenne de maths"));
// console.log(note_maths);
// let note_français=Number(prompt("entrer la moyenne de français"));
// console.log(note_français);
// let note_anglais=Number(prompt("entrer la moyenne d'anglais"));
// console.log(note_anglais);
// let result= note_maths + note_français + note_anglais;
// console.log(result);
// document.write(result);

let html = 'number';
let nalea = 12;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 1024);
   html = html + '<img src="https://picsum.photos/id/' + tmp + '/350/350" />';
}
document.body.innerHTML = html;




