const dropdownDetailsBlock = document.querySelector('.details-block');
const dropdownImg = document.querySelector('.details-block img');
const dropdownContent = document.getElementById('drop-down-content');

dropdownDetailsBlock.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';

        dropdownImg.classList.remove('rotate');
    } else {
        dropdownContent.style.display = 'block';

        dropdownImg.classList.add('rotate');
    }
});