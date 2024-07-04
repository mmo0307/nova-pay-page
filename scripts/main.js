const dropdownDetailsBlock = document.querySelector('.details-block');
const dropdownImg = document.querySelector('.details-block img');
const dropdownContent = document.getElementById('drop-down-content');

//dropdown
dropdownDetailsBlock.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';

        dropdownImg.classList.remove('rotate');
    } else {
        dropdownContent.style.display = 'block';

        dropdownImg.classList.add('rotate');
    }
});

//add-card
document.getElementById('addCard').addEventListener('click', function() {
    const blockForm = document.getElementById('add-card-block-from');
    const formWrapper = document.getElementById('add-card-form-wrapper');
    const buttonPay = document.getElementById('add-card-button');
    const buttonAddCard = document.getElementById('addCard');

    buttonAddCard.style.display = 'none';
    blockForm.style.display = 'flex';
    formWrapper.style.display = 'block';
    buttonPay.style.display = 'block';
})

//checkbox
document.getElementById('checkbox').addEventListener('click', function() {
    const checkbox = document.getElementById('checkbox');
    const checkboxImg = document.querySelector('.checkbox-input img');
    const checkboxLabel = document.getElementById('checkbox-label');

    if (checkbox.classList.contains('checkbox-input-active')) {
        checkbox.classList.remove('checkbox-input-active');

        checkboxImg.style.display = 'none';

        checkboxLabel.classList.remove('checkbox-label-active');
    } else {
        checkbox.classList.add('checkbox-input-active');

        checkboxImg.style.display = 'block';

        checkboxLabel.classList.add('checkbox-label-active');
    }
})

//number card
document.getElementById('cardNumberInput').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');

    //max length 16 symbols or set 20 symbols
    if (value.length > 16) {
        value = value.slice(0, 16);
    }

    value = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = value;
});

//date-input
document.getElementById('dateInput').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) {
        value = value.slice(0, 4);
    }
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    e.target.value = value;
});

//cvv
document.getElementById('cvvInput').addEventListener('input', function(e) {
    let value = e.target.value;
    if (value.length > 3) {
        e.target.value = value.slice(0, 3);
    }
});

//focus input
document.addEventListener('DOMContentLoaded', function() {
    function toggleLabelClass(input, addClass) {
        const label = document.querySelector(`label[for="${input.id}"]`);

        if (addClass) {
            label.classList.add('label-input-active');
        } else {
            label.classList.remove('label-input-active');
        }
    }

    const inputs = document.querySelectorAll('.input-block input');

    inputs.forEach(input => {
        if (input.value) {
            toggleLabelClass(input, true);
        }

        input.addEventListener('focus', () => {
            toggleLabelClass(input, true);
        });

        input.addEventListener('blur', () => {
            toggleLabelClass(input, !!input.value);
        });
    });
});

