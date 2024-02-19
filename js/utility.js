// if a seat is  clicked
function seatSelected(seat){
    const seatValue = document.getElementById(seat).innerText;
    checkSeat(seatValue);
}

// color of selected seat
function selectedColor(seat){
    document.getElementById(seat).style.background = '#1DD100';
    document.getElementById(seat).style.color = 'white';
}

// decrease the value of seat by 1 
function seatLeft(){
    const seat_Left = document.getElementById('seat-left').innerText;
    let numberOfSeat = parseInt(seat_Left);
    numberOfSeat -= 1;
    document.getElementById('seat-left').innerText = numberOfSeat;
}

// increase the value of total selected seat by 1
function totalSeatSelected(){
    const totalSeat = document.getElementById('total-seat').innerText;
    let totalSeatCount = parseInt(totalSeat);
    totalSeatCount += 1;
    document.getElementById('total-seat').innerText = totalSeatCount;
}

// check if number of total selected seat is less or equal 4 
function isTotalSeat4(seat){
    const totalSeat = document.getElementById('total-seat').innerText;
    let totalSeatCount = parseInt(totalSeat);
    if(totalSeatCount <= 3){
        selectedColor(seat);
        seatLeft();
        totalSeatSelected();
        addingSeatInfo(seat)
        addSeat(seat);
    }
    else
        alertChecking();
}

function alertChecking(){
    const Alert = document.getElementById('my_modal_1');
    Alert.showModal()
}

function closeModal(){
    document.getElementById('alert').classList.remove('modal-open');
}

function addingSeatInfo(seat){
    const ticketPrice = document.getElementById('ticket-price').innerText;
    let price = parseInt(ticketPrice); // it will take given price in the ticket information section
    const seatClass = document.getElementById('seat-class').innerText; // it will take ticket class in the ticket information section

    const ticketInformation = document.getElementById('selected-ticket-info');
    ticketInformation.innerHTML += `
        <div class="font_inter text-[#03071299] flex justify-between">
            <p>${seat}</p>
            <p>${seatClass}</p>
            <p>${price}</p>
        </div>
    `;
}