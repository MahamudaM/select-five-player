// added event listener on the select button
document.getElementById('selectBtn1').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    // console.log(selectElenent.childNodes);
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
    const liNew6 = document.createElement('li');
    liNew6.innerText = "Renato Sanches";
    selectElenent.appendChild(liNew6);
// disable button
 
const disabl= document.getElementById('selectBtn6')
if(selectElenent.innerHTML===" <li>Renato Sanches </li>"){
    
    disabl.setAttribute('disabled',true)
    
}
else{
    disabl.removeAttribute('disabled')
}
    
})

// per player cost calculator
document.getElementById('playerCostBtn').addEventListener('click',function(){
  const inputPlayerCost = document.getElementById('playerCostInputFeld')
 const playerCostAmount =  inputPlayerCost.value
 const parsPlyerAmount =parseFloat(playerCostAmount);
//  function emteyInput(){
//     if(inputPlayerCost.value===" "){
//         alert('place type a number')
//     }
//  }

// ul list
const ulNodelstLength = document.getElementById('selectOlList');
let lengthOfList = ulNodelstLength.childNodes.length;
const getRootList = lengthOfList -1;
const parsListLength = parseFloat(getRootList);

// total player cost
const multiplyTotalPayer = parsPlyerAmount*parsListLength
 console.log(multiplyTotalPayer)
//  total Expenses
const expensElement = document.getElementById('totalExpens');
expensElement.innerText = multiplyTotalPayer;

})

// all  expenses calcolation
document.getElementById('finalExpens').addEventListener('click',function(){
    const playerExpensElement = document.getElementById('totalExpens');
    const playerExpensValu = playerExpensElement.innerText
    const parsPlayerExpen = parseFloat(playerExpensValu);
    // maneger cost
    const manegerElement = document.getElementById('manegerInputFild');
    const manegerInputValu = manegerElement.value;
    const parsManegerInput = parseFloat(manegerInputValu);

    // coach expenses
    const coachExpens = document.getElementById('coachInputFild');
    const coachFildValu = coachExpens.value;
    const parsCoachInput = parseFloat(coachFildValu);
    // final expens calculat
    const finalExpensForAll = parsPlayerExpen + parsManegerInput + parsCoachInput ;
    const finalResult = document.getElementById('totalCalculation');
    finalResult.innerText = finalExpensForAll;
})









const placeUl = document.querySelector("#selectOlList ul");
// get nodelist length



// const selectElenentOl = document.querySelector("#selectOlList")
// console.log()