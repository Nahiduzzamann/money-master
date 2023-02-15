document.getElementById('calculate').addEventListener('click', function () {
    const income = parseInt(document.getElementById('income').value);
    const food = parseInt(document.getElementById('food').value);
    const rent = parseInt(document.getElementById('rent').value);
    const other = parseInt(document.getElementById('other').value);
    const totalExpenses = food + rent + other;
    if (income <= 0 || food < 0 || rent < 0 || other < 0) {
        alert('Please fill up positive value');
        return;
    }
    else if (totalExpenses <= income) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = income - totalExpenses;
    }
    else {
        alert('Sorry Dude! Fill up income field or Please Earn more.')
    }

})

document.getElementById('btn-save').addEventListener('click', function () {
    const save = parseInt(document.getElementById('save').value);
    const income = parseInt(document.getElementById('income').value);
    const savingAmount = income * (save / 100);
    // console.log(savingAmount);
    const food = parseInt(document.getElementById('food').value);
    const rent = parseInt(document.getElementById('rent').value);
    const other = parseInt(document.getElementById('other').value);
    const totalExpenses = food + rent + other;
    const balance = income - totalExpenses;
    if (save >= 0 && savingAmount <= balance) {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = balance-savingAmount;
    }
    else{
        alert('Enter positive % or this percentage is not available for your LOW Balance')
        document.getElementById('saving-amount').innerText = '0';
        document.getElementById('remaining-balance').innerText = '0';
    }

})