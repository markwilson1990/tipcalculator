let tipAmountSelector = document.querySelector('.tip-amount');

function calculateTipAmount() {
    let billAmount = document.querySelector('#billamount').value;
    let billServiceAmount = document.querySelector('#billservice').value;
    let peopleSharingAmount = document.querySelector('#peopleamount').value;

    if (billAmount === '' || billServiceAmount === "Choose an option") {
        alert("Please input values and recalculate");
    } else if (peopleSharingAmount === '' || peopleSharingAmount == 0) {
        let tipAmount = billAmount * billServiceAmount / 1;
        setTipAmount(tipAmount, peopleSharingAmount);
    } else {
        let tipAmount = billAmount * billServiceAmount / peopleSharingAmount;
        setTipAmount(tipAmount, peopleSharingAmount);
    }
}

function setTipAmount(tipAmount, peopleSharingAmount) {
    console.log(tipAmount, peopleSharingAmount);
    if (isNaN(tipAmount)) {
        alert("Please input numerical values");
    } else {
        if (peopleSharingAmount > 1) {
            tipAmountSelector.innerHTML = ("TIP AMOUNT" + " " + "£" + tipAmount.toFixed(2) + " " + "each");
        } else {
            tipAmountSelector.innerHTML = ("TIP AMOUNT" + " " + "£" + tipAmount.toFixed(2));
        }
    }
}

let calculateBtn = document.querySelector('#calculate')
calculateBtn.addEventListener('click', calculateTipAmount);
