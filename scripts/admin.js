//Show modal to edit or add a product
const modal = document.querySelector('.edit-add');
const close = document.querySelector('.edit-add__close');
const btnAdd = document.querySelector('.options-up__actions button');
const opacity = document.querySelector('.opacity');

function openHandle() {
    modal.classList.add('edit-add--show');
    opacity.classList.add('opacity--show');
}
btnAdd.addEventListener('click', openHandle);

function closeHandle() {
    modal.classList.remove('edit-add--show');
    opacity.classList.remove('opacity--show');
}
close.addEventListener('click',closeHandle);

