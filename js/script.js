
const listaAlimentiUno = ['pane','acqua','mentos','hamburger','goleador'];
console.log(listaAlimentiUno);


let text = "<ul>";
for (let i=0; i<listaAlimentiUno.length; i++) {
  text += "<li>" + listaAlimentiUno[i] + "</li>";
} 
text += "</ul>";
document.getElementById("list-one").innerHTML = text;



const listaAlimentiDue = ['birra','vino','tequila','gin','vodka'];
console.log(listaAlimentiDue);

let c=0;
text = "<ul>";
while (c < listaAlimentiDue.length){
  c++;
  text += "<li>" + listaAlimentiDue[c] + "</li>";
}
text += "</ul>";
document.getElementById("list-two").innerHTML = text;
