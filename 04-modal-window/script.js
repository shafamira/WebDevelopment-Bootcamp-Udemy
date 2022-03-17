'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')
console.log(btnsShowModal)

for(let i=0; i<btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', function () {
        console.log('Button Open Clicked!');
        // remove the hidden in our modal class
        modal.classList.remove('hidden') 
    })
    

btnCloseModal.addEventListener('click', function () {
    console.log('Button Close Clicked!');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

      