let seat_List = [];

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
    grandTotal(total);
}

function grandTotal(grandTotal){
    document.getElementById('grand-total').innerText = grandTotal;
}

// function to active coupon apply button
