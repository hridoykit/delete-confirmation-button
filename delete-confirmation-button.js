document.getElementById('disable-input-field').addEventListener('keyup', (e) => {
    e.preventDefault();
    // const inputValue = document.getElementById('disable-input-field').value;
    const input = e.target.value;
    const button = document.getElementById('delete-btn');

    if(input.toLowerCase() === 'delete'){
        button.disabled = false;
    }
    else{
        button.disabled = true;
    }
});
