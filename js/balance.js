document.getElementById('calculate').addEventListener('click', function () {
    const income = getValue('income');
    const food = getValue('food');
    const rent = getValue('rent');
    const clothes = getValue('clothes');
    const totalExpense = food + rent + clothes;
    const balance = income - totalExpense;
    if (totalExpense > income) {
        alert('cut the cloth according to your coat');
        return;
    }
    setValue('total-expense', totalExpense);
    setValue('balance', balance);
});

document.getElementById('save-btn').addEventListener('click', function () {
    const save = getValue('save');
    if(save > 100){
        alert('You can`t save more than your income.');
        return;
    }
    const balanceString = document.getElementById('balance');
    const balance = parseFloat(balanceString.innerText);
    const income = getValue('income');
    const savingAmount = (income * save) / 100;
    const remainingBalance = balance - savingAmount;
    if (savingAmount > balance) {
        alert('You are not cutting the cloth according to your coat');
        return;
    }
    setValue('saving-amount', savingAmount);
    setValue('remaining-balance', remainingBalance);
});