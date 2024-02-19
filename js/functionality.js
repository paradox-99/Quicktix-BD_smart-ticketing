let seat_List = [];
const coupon_code = ['NEW15', 'Couple 20'];

function checkSeat(seat) {
    let list = seat_List;
    let flag = 0;
    for (const seatName of list) {
        if(seat === seatName)  
            flag = 1;
    }
    if(flag == 0){
        isTotalSeat4(seat);
    }
}

function addSeat(seat){
    seat_List.push(seat);
}

function priceCount(){
    const totalSeat = document.getElementById('total-seat').innerText;
    const totalSeatCount = parseInt(totalSeat);

    const ticketPrice = document.getElementById('ticket-price').innerText;
    const price = parseInt(ticketPrice);

    const total = price*totalSeatCount;

    document.getElementById('total-price').innerText = total;
    document.getElementById('grand-total').innerText = total;
}

// function to check if 4 seat id selected and to active coupon code 
function activeCouponButton(){
    const totalSeat = document.getElementById('total-seat').innerText;
    const totalSeatCount = parseInt(totalSeat);

    if(totalSeatCount == 4){
        document.getElementById('coupon-button').removeAttribute('disabled');
    }
}

// function to apply coupon code
function checkCouponCode(){
    const couponCode = document.getElementById('coupon-code').value;
    let flag = 0;

    if(couponCode === coupon_code[0]){
        flag = 1;
        document.getElementById('coupon-div').classList.add('hidden');
    }
    else if(couponCode === coupon_code[1]){
        flag = 2;
        document.getElementById('coupon-div').classList.add('hidden');
    }
    else{
        document.getElementById('wrong-coupon').classList.remove('hidden');
        return;
    }
    const gdPrice =  document.getElementById('grand-total').innerText;
    let price = parseInt(gdPrice);
    let discount;
    if(flag == 1)
    {
        discount = gdPrice * 0.15;
        price -= (gdPrice * 0.15);
        document.getElementById('discounted-price').innerHTML =`
        <p>Discount</p>
        <p>BDT -  ${discount}</p>
    `;
    }
    else if(flag == 2){
        discount = gdPrice * 0.20;
        price -= (gdPrice * 0.20);
        document.getElementById('discounted-price').innerHTML =`
        <p>Discount</p>
        <p>BDT -  ${discount}</p>
    `;
    }
    document.getElementById('grand-total').innerText = price;
}


// enabling Next button
function enableNextBtn(){
    const number = document.getElementById('phone').value;
    console.log(number);
    const num_length = number.length;

    const totalSeat = document.getElementById('total-seat').innerText;
    const totalSeatCount = parseInt(totalSeat);

    // button will be enabled if it's length is 4 or greater else button will be disabled
    if(num_length >= 4 && totalSeatCount >= 1)
        document.getElementById('next-btn').removeAttribute('disabled');
    else
        document.getElementById('next-btn').setAttribute('disabled','true');

}

document.getElementById('phone').addEventListener('keyup', enableNextBtn);