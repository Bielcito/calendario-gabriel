'use strict';

let displayingMonth;
let displayingYear;

function createEvent(year, month, day) {
    console.log(year, month, day);
    let createEvent = document.getElementById('createEvent');
    let yearDiv = document.getElementById('year');
    let monthDiv = document.getElementById('month');
    let dayDiv = document.getElementById('day');
    document.getElementById('inputyear').value = year;
    document.getElementById('inputmonth').value = month;
    document.getElementById('inputday').value = day;
    createEvent.hidden = false;
    yearDiv.innerText = year;
    monthDiv.innerText = month;
    dayDiv.innerText = day;
}

function showCalendar(month, year) {
    let actualMonth = month;
    let actualYear = year;

    let calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    let title = document.getElementById('title');
    title.innerHTML = '';

    let months = [
        31,
        actualYear % 4 === 0 ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];

    let monthsName = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    title.innerText = monthsName[month];

    let weekName = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
    ];

    // Get actual day of week:
    let actualDayOfWeek = 1;
    for (let i = 1900; i <= actualYear; i++) {
        actualDayOfWeek += (actualYear % 4 === 0 ? 366 : 365);
    }
    for (let i = 0; i < actualMonth; i++) {
        actualDayOfWeek += months[i];
    }
    actualDayOfWeek %= 7;

    let counter = 1;

    for (let i = 0; i < 6; i++) {
        let row = calendar.insertRow();
        for (let j = 0; j < 7; j++) {
            let a = document.createElement('a');
            a.href = 'javascript:void(0);';
            let cell = row.insertCell();

            if (i === 0) {
                cell.innerText = weekName[j];

            } else if (i === 1) {
                if (j < actualDayOfWeek) {
                    continue;
                } else {
                    a.innerText = counter++;
                }
            } else {
                if (counter <= months[i-1]) {
                    a.innerText = counter++;
                } else {
                    continue;
                }
            }

            for(let i = 0; i < events.length; i++) {
                if (
                    events[i].year == year &&
                    events[i].month == month &&
                    events[i].day == counter-1
                ) {
                    a.style.backgroundColor = 'red';
                    a.href='seeEvent.php?year='+year+'&month='+month+'&day='+(counter-1);
                }
            }

            a.onclick = createEvent.bind(null, year, month, counter-1);
            cell.appendChild(a);
        }
    }
}

function increaseMonth() {
    displayingMonth++;
    if (displayingMonth > 11) {
        displayingMonth = 0;
        displayingYear++;
    }
    showCalendar(displayingMonth, displayingYear);
}

function decreaseMonth() {
    displayingMonth--;
    if(displayingMonth < 0) {
        displayingMonth = 11;
        displayingYear--;
    }
    showCalendar(displayingMonth, displayingYear);
}

window.onload = () => {
    let date = new Date();
    displayingMonth = date.getMonth();
    displayingYear = date.getFullYear();
    showCalendar(displayingMonth, displayingYear);
}



