let sum = 0.0;
let discount = 0.0;

function addToCart(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const count = selectedItemContainer.childElementCount;

    const itemName = target.parentNode.childNodes[1].innerText;
    const ol = document.createElement('ol');
    ol.classList.add('pt-6')
    ol.innerHTML = `${count + 1}. ${itemName}`;

    selectedItemContainer.appendChild(ol);

    const totalPrice = target.parentNode.childNodes[3].innerText.split(" ")[0];

    sum = parseFloat(sum) + parseFloat(totalPrice);
    document.getElementById('total-price').innerText = sum.toFixed(2);

    updateTotalPrice();
    checkApplyButton();

    checkPurchaseButton();
}

function updateTotalPrice() {
    const total = sum - discount;
    document.getElementById('total-price').innerText = total.toFixed(2);
    document.getElementById('finalTotal').innerText = total.toFixed(2);
}

function checkApplyButton() {
    const applyButton = document.getElementById('apply-btn');
    if (sum >= 200) {
        applyButton.disabled = false;
    } else {
        applyButton.disabled = true;
    }
}


function promoCodeApply() {
    const couponCodeInput = document.getElementById('coupon-code');
    const couponCode = couponCodeInput.value;

    if (couponCode === 'SELL200' && sum >= 200) {
        discount = sum * 0.2; // 20% discount
        document.getElementById('discount-info').innerText = discount.toFixed(2);
        const total = sum - discount;
        document.getElementById('finalTotal').innerText = total.toFixed(2);
        document.getElementById('apply-btn').disabled = true; // Disable the Apply button after applying the discount
    } else {
        alert('Invalid promo code or minimum purchase not met');
        document.getElementById('discount-info').innerText = '0.0';
        checkApplyButton(); 
    }
}


function checkPurchaseButton() {
    const makePurchaseButton = document.getElementById('make-purchase-btn');
    if (sum > 0) {
        makePurchaseButton.disabled = false;
    } else {
        makePurchaseButton.disabled = true;
    }
}


document.getElementById('go-home').addEventListener('click', function () {
    window.location.href = 'index.html';
});




