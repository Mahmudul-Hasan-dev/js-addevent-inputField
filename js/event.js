// console.log('connected');

document.getElementById('update-btn').addEventListener('click', function () {
    // console.log('clicked')

    //to connect to any field or btn we should give an id
    let inputText = document.getElementById('input-field');
    let inputValue = inputText.value;
    // console.log(inputValue);

    //fetch the display field to display the text from input field

    let textDisplayField = document.getElementById('textDisplayField');
    textDisplayField.innerText = inputValue;
    inputText.value = '';
})