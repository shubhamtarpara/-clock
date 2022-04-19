const clockEl = document.getElementById('time');
const buttons = document.querySelectorAll('.hour button');

let element1 = document.getElementById('month-first');
let element2 = document.getElementById('day-first');

let element3 = document.getElementById('full-hour');
let element4 = document.getElementById('half-hour');
let currentZone;
let hourText;
let interval1;
let interval2;

const countryContainer = document.getElementById('country-container');
let currentCountry = document.getElementById('current-country');
let changeCountry = document.getElementById('country');

let NewZealand = document.getElementById('NewZealand')
let China = document.getElementById('China')
let Italy = document.getElementById('Italy')
let GTM = document.getElementById('GTM')


NewZealand.addEventListener('click', () => setInterval(letNewzealandTime, 1000));
// letNewzealandTime();
function letNewzealandTime() {
    clearInterval(interval1);
    console.log("clicked")
    clockEl.innerHTML = new Date().toLocaleString("en-NZ", {
        timeZone: "Pacific/Auckland",
        timeStyle: 'medium',
        hourCycle: 'h12',
        hour12: hourFlag
    });
}

China.addEventListener('click', () => setInterval(letChinaTime, 1000));

function letChinaTime() {
    clearInterval(interval1);
    console.log("clicked")
    clockEl.innerHTML = new Date().toLocaleString("en-CN", {
        timeZone: "Asia/Shanghai",
        timeStyle: 'medium',
        hourCycle: 'h12',
        hour12: hourFlag
    });
}



const dayDate = document.getElementById('day-date')
dayDate.textContent = new Date().toLocaleString("en-IN", {
    dateStyle: 'full'
});


function updateTime(hourFlag, currentZone) {
    clearInterval(interval1);
    interval1 = setInterval(() => {
        hourText = new Date().toLocaleString("en-IN", {
            timeZone: currentZone,
            timeStyle: "medium",
            hour12: hourFlag
        });
        clockEl.textContent = hourText;
    });

};
const fullHour = () => {
    element3.addEventListener('click', () => {
        element3.style.backgroundColor = 'black';
        element3.style.color = 'white';
        element3.style.borderColor = 'white';

        element4.style.backgroundColor = 'white';
        element4.style.color = 'black';
        element4.style.borderColor = 'black';

        updateTime(hourFlag = false, currentZone);
        element4.classList.toggle('active');
        element3.classList.toggle('active');
    });
};
fullHour();

const halfHour = () => {
    element4.addEventListener('click', () => {
        element4.style.backgroundColor = 'black';
        element4.style.color = 'white';
        element4.style.borderColor = 'white';

        element3.style.backgroundColor = 'white';
        element3.style.color = 'black';
        element3.style.borderColor = 'black'

        updateTime(hourFlag = true, currentZone);
        element3.classList.toggle('active');
        element4.classList.toggle('active');
    });
    element4.classList.add('active');
};
halfHour();


const monthFirst = () => {

    element1.addEventListener('click', () => {
        element1.style.backgroundColor = 'black';
        element1.style.color = 'white';
        element1.style.borderColor = 'white';

        element2.style.backgroundColor = 'white';
        element2.style.color = 'black';
        element2.style.borderColor = 'black';

        let myDate = new Date().toLocaleString("en-IN", {
            dateStyle: "full"
        }).split(",");
        anotherDate = myDate[1].trim().split(" ");
        dayDate.textContent = myDate[0] + "," + " " + anotherDate[1] + " " + anotherDate[0] + "," + myDate[2];
        element1.classList.add("active");
        element2.classList.remove("active");
    })
}
monthFirst();

const dayFirst = () => {
    element2.addEventListener('click', () => {
        element2.style.backgroundColor = 'black';
        element2.style.color = 'white';
        element2.style.borderColor = 'white';

        element1.style.backgroundColor = 'white';
        element1.style.color = 'black';
        element1.style.borderColor = 'black'

        dayDate.textContent = new Date().toLocaleString("en-IN", {
            dateStyle: 'full'
        });
        element2.classList.add("active");
        element1.classList.remove("active");
    });
    element2.classList.add("active");
}
dayFirst();


// var today = new Date();
// const day = today.getDate()
// const month = today.toLocaleDateString("default", { month: "short" });
// const date = today.toLocaleDateString("default", { weekday: "long" });
// const year = today.getFullYear();

// document.querySelector(".month-name").innerHTML = month;
// document.querySelector(".day-name").innerHTML = `${day},`;
// document.querySelector(".day-number").innerHTML = `${date},`;
// document.querySelector(".year").innerHTML = year;


// buttonS.forEach((button) => {
//     button.addEventListener("click", () => {
//         const forMate =button.getAttribute()

//     });
// });