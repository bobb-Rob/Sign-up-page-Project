
const elArray = document.querySelectorAll('div.inventory, li.inventory-drop-down');
const inventoryDropDown = document.querySelector('.inventory');


function mouseOverDropDown(arrayEl, displayEl){
    arrayEl.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
            console.log(e.target);
            displayEl.style.display = 'block';
        });
        element.addEventListener('mouseleave', (e) => {
            console.log(e.target);
            displayEl.style.display = 'none'; 
        })
    })
}


mouseOverDropDown(elArray, inventoryDropDown);

