/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1+number2;
}
function addNumbers(){
    let addNumber1=Number(document.querySelector("#add1").value);
    let addNumber2=Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value=add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1-number2;
}
function subtractNumbers(){
    let subtractNumber1=Number(document.querySelector("#subtract1").value);
    let subtractNumber2=Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value=subtract(subtractNumber1, subtractNumber2);
}    
/* Arrow Function - Multiply Numbers */
  
    let mutiply=(number1, number2) => {return number1*number2};
    let mutiplyNumbers=() => {
        let multiplyNumber1=Number(document.querySelector("#factor1").value);
        let multiplyNumber2=Number(document.querySelector("#factor2").value);
        document.querySelector("#product").value=mutiply(multiplyNumber1, multiplyNumber2);
    }         

/* Open Function Use - Divide Numbers */
   let divide=(number1, number2) => {return number1/number2};
   function divideNumbers(){
    let divideNumber1=Number(document.querySelector("#dividend").value);
    let divideNumber2=Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value=divide(divideNumber1, divideNumber2);
}     

/* Decision Structure */
function getSubTotal(){
     let subTotal=Number(document.querySelector("#subtotal").value);
     checkElemnt=document.querySelector("#member");
     if(checkElemnt.checked){
         subTotal-=subTotal*0.2;
     }
     document.querySelector("#total").innerHTML=`Total:$${Math.round(subTotal * 100) / 100}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML=numbers;
/* Output Odds Only Array */
let oddNumbers=numbers.filter(number=>number%2===1);
document.querySelector("#odds").innerHTML=oddNumbers;
/* Output Evens Only Array */
let evenNumbers=numbers.filter(number=>number%2===0);
document.querySelector("#evens").innerHTML=evenNumbers;
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML=numbers.reduce((total,number)=>total+number, 0);
/* Output Multiplied by 2 Array */
let multipliedNumbers=numbers.map(number=>number*2); 
document.querySelector("#multiplied").innerHTML=multipliedNumbers;
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML=multipliedNumbers.reduce((sum,number)=>sum+number, 0);
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener("click", mutiplyNumbers);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
document.querySelector("#getTotal").addEventListener("click", getSubTotal);