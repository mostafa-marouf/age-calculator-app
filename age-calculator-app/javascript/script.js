const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDay = now.getDate();

let btn = document.querySelector(".btn");
let inputDay = document.getElementById("input1");
let inputMonth = document.getElementById("input2");
let inputYear = document.getElementById("input3");

let resolt1 = document.getElementById("resolt1");
let resolt2 = document.getElementById("resolt2");
let resolt3 = document.getElementById("resolt3");

btn.addEventListener("click", () => {
  outputDay();
  outputMonth();
  outputYear();

  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});

const outputDay = () => {
  let inputValue = Number(inputDay.value);
  let inputMonthValue = Number(inputMonth.value);
  let inputYearValue = Number(inputYear.value);

  let diffYear = currentYear - inputYearValue;
  let diffMonth = currentMonth - inputMonthValue;
  let diffDay = currentDay - inputValue;

  if (diffDay < 0) {
    const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    diffMonth--;
    diffDay = currentDay + daysInPrevMonth - inputValue;
  }

  if (diffMonth < 0) {
    diffYear--;
    diffMonth += 12;
  }

  resolt3.innerHTML = diffDay;
  resolt2.innerHTML = diffMonth;
  resolt1.innerHTML = diffYear >= 0 ? diffYear : 0;
};
