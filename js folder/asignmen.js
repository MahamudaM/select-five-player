// added event listener on the select button
document.getElementById('selectBtn1').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    
    // console.log(selectElenent.childNodes);
    const liNew = document.createElement('li');
    liNew.innerText = "Lionel Messi";
    // list condition
    if(selectElenent.childNodes.length<6){
        selectElenent.appendChild(liNew);
    }
    else{
        return;
    }
    
 // disable button
 document.getElementById('selectBtn1').disabled = true;
   

})
// button2
document.getElementById('selectBtn2').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Neymar Jr";
    // selectElenent.appendChild(liNew);
    // list condition
    if(selectElenent.childNodes.length<6){
        selectElenent.appendChild(liNew);
    }
    else{
        return;
    }
     // disable button
     document.getElementById('selectBtn2').disabled = true;

    
})
// button3
document.getElementById('selectBtn3').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Kylian Mbappé";
    // selectElenent.appendChild(liNew);

    // list condition
    if(selectElenent.childNodes.length<6){
        selectElenent.appendChild(liNew);
    }
    else{
        return;
    }
     // disable button
     document.getElementById('selectBtn3').disabled = true;

    
})
// button4
document.getElementById('selectBtn4').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Vítor Machado";
    // selectElenent.appendChild(liNew);

    // list condition
    if(selectElenent.childNodes.length<6){
        selectElenent.appendChild(liNew);
    }
    else{
        return;
    }
     // disable button
     document.getElementById('selectBtn4').disabled = true;


    
})
// button5
document.getElementById('selectBtn5').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew = document.createElement('li');
    liNew.innerText = "Sergio Ramos";
    // selectElenent.appendChild(liNew);

    // list condition
    if(selectElenent.childNodes.length<6){
        selectElenent.appendChild(liNew);
    }
    else{
        return;
    }
// disable button
document.getElementById('selectBtn5').disabled = true;
   
})



//button6

document.getElementById('selectBtn6').addEventListener('click',function(){
    const selectElenent = document.getElementById('selectOlList');
    const liNew6 = document.createElement('li');
    liNew6.innerText = "Renato Sanches";
    // selectElenent.appendChild(liNew6);
     //list condition
    if(selectElenent.childNodes.length<6){
        selectElenent.appendChild(liNew6);
    }
    else{
        return;
    }

// disable button

document.getElementById('selectBtn6').disabled = true;
    
    
})



// per player cost calculator
document.getElementById('playerCostBtn').addEventListener('click',function(){
  const inputPlayerCost = document.getElementById('playerCostInputFeld')
 const playerCostAmount =  inputPlayerCost.value
 const parsPlyerAmount =parseFloat(playerCostAmount);


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

// creat total  expenses calcolation
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









