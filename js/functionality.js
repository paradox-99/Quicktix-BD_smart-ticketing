let seat_List = [];

function checkSeat(seat) {
    let list = seat_List;
    console.log(list);
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
    console.log(seat_List);
}