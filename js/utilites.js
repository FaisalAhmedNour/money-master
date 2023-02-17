function getValue(id){
    const valueString = document.getElementById(id).value;
    if(valueString === ''){
        alert('Please give a amount.');
        return;
    }
    else if (isNaN(valueString)){
        alert('Please give a number only.');
        return;
    }
    const value = parseFloat(valueString);
    return value;
}

function setValue(id, value){
    document.getElementById(id).innerText = value;
}