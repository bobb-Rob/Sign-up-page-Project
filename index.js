
//  document.querySelectorAll('div.inventory, li.inventory-drop-down');
// const inventoryDropDown = document.querySelector('.inventory');


// // MouseOver drop Down function
// function mouseOverDropDown(arrayEl, displayEl){
//     arrayEl.forEach((element) => {
//         element.addEventListener('mouseenter', (e) => {
//             console.log(e.target);
//             displayEl.style.display = 'block';
//         });
//         element.addEventListener('mouseleave', (e) => {
//             console.log(e.target);
//             displayEl.style.display = 'none'; 
//         })
//     })
// }


// mouseOverDropDown(document.querySelectorAll('div.inventory, li.inventory-drop-down'), inventoryDropDown);

// Auto Select Home NavBar
// document.querySelector('.nav-list').firstElementChild.style.backgroundColor = 'rgb(1, 90, 38)';


// function solution(year) {
//    let century = year / 100;  
//     !Number.isInteger(century) ? century += 1 : null;   
//     return Math.floor(century);
// }

// console.log(solution(1701));

// function palindrome(str){
//     var regex = /[\W_]/g;
//     var lowCaseStr = str.toLowerCase().replace(regex, '');   
//     var reverseStr = lowCaseStr.split('').reverse().join('');   
//    return lowCaseStr === reverseStr;
// }

// console.log(palindrome("A man, a plan, a canal. Panama"));



// function solution(inputArray) {
//     let result = [];
//     for(let i = 0; i < inputArray.length; i += 2){
//         result = [...result, inputArray[i] * inputArray[i + 1]];      
//     }   
//    return Math.max(...result)
// }

// function solution(inputArray) {
//     let result = [];
//     for(let i = 0; i < inputArray.length - 1; i++){
//         result.push(inputArray[i] * inputArray[i + 1]);        
//     }
//     console.log(result)
//    return Math.max(...result)
// }

// console.log(solution([9, 5, 10, 2, 24, -1, -48]));


function solution(sequence) {
    for(let i = 0; i < sequence.length; i++){
       
    
    }
}

console.log(solution([1, 3, 2]));
