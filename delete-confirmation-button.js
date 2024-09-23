document.getElementById('disable-input-field').addEventListener('keyup', (e) => {
    e.preventDefault();
    // const inputValue = document.getElementById('disable-input-field').value;
    const input = e.target.value;
    const button = document.getElementById('delete-btn');

    if(input.toLowerCase() === 'delete'){
        // button.disabled = false;
        button.removeAttribute('disabled');
    }
    else{
        // button.disabled = true;
        button.setAttribute('disabled', true);
    }
});

// delete the text
document.getElementById('delete-btn').addEventListener('click', () => {
    if(confirm('want to delete?')){
        document.getElementById('delete-text').style.display = 'none'; //perform delete action
        alert('item deleted!');
    }
    else{
        alert('delete action canceled')
    }
});
