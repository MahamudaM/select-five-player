// added event listener on the select button
document.getElementById('selectBtn1').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    console.log(selectElenent.childNodes);
    const liNew = document.createElement('li');
    liNew.innerText = "Lionel Messi";
    selectElenent.appendChild(liNew);
 // disable button
 const disabl= document.getElementById('selectBtn1')
 if(selectElenent.innerText==="Lionel Messi"){
     
     disabl.setAttribute('disabled',true) 
 }
 else{
     disabl.removeAttribute('disabled')
 }
    
})
// button2
document.getElementById('selectBtn2').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Neymar Jr";
    selectElenent.appendChild(liNew);
     // disable button
     const disabl= document.getElementById('selectBtn2')
     if(selectElenent.innerText==="Neymar Jr"){
         disabl.setAttribute('disabled',true);
     }
     else{
         disabl.removeAttribute('disabled');
     }
})
// button3
document.getElementById('selectBtn3').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Kylian Mbappé";
    selectElenent.appendChild(liNew);
     // disable button
     const disabl= document.getElementById('selectBtn3')
     if(selectElenent.innerText==="Kylian Mbappé"){
         
         disabl.setAttribute('disabled',true)
         
     }
     else{
         disabl.removeAttribute('disabled')
     }
})
// button4
document.getElementById('selectBtn4').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Vítor Machado";
    selectElenent.appendChild(liNew);
     // disable button
     const disabl= document.getElementById('selectBtn4')
     if(selectElenent.innerText==="Vítor Machado"){
         
         disabl.setAttribute('disabled',true)
         
     }
     else{
         disabl.removeAttribute('disabled')
     }
})
// button5
document.getElementById('selectBtn5').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Sergio Ramos";
    selectElenent.appendChild(liNew);

     // disable button
     const disabl= document.getElementById('selectBtn5')
     if(selectElenent.innerText==="Sergio Ramos"){
         
         disabl.setAttribute('disabled',true)
         
     }
     else{
         disabl.removeAttribute('disabled')
     }
})
//button6 
document.getElementById('selectBtn6').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
   const listValu = document.getElementById('listValu')
    const liNew = document.createElement('li');
    liNew.innerText = listValu.innerText;
    selectElenent.appendChild(liNew);
    // disable button
    const disabl= document.getElementById('selectBtn6');
   
    const selectElenentLI = document.querySelectorAll("#selectOlList ul");
    if(selectElenentLI.innerText===listValu.innerText){
        disabl.setAttribute('disabled',true) 
    }
    else{
        disabl.removeAttribute('disabled')
    }
})
// get nodelist length
const ulNodelstLength = document.getElementById('selectOlList');
let legthOfList = ulNodelstLength.childNodes.length;
console.log(legthOfList);


// const selectElenentOl = document.querySelector("#selectOlList")
// console.log()