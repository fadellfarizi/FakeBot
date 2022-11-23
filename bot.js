const question = document.getElementById("question");
const answer = document.getElementById("answer");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama saya X-bot, Siapa nama anda ?",
    `Halo ${data?.nama}, berapa usia anda ?`,
    `Ohh ${data?.usia}, hobi anda apa ya ?`,
    `Kebetulan sama dong aku juga hobi ${data?.hobi}, Btw masih single ?`,
    `Ohhh ${data?.pacar}, ya udah kalau gitu kita udahan aja yaa ??`,
  ];
};

question.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: answer.value });
  } else if (init === 2) {
    botDelay({ usia: answer.value });
  } else if (init === 3) {
    botDelay({ hobi: answer.value });
  } else if (init === 4) {
    botDelay({ pacar: answer.value });
  } else if (init === 5) {
    botFinish();
  } else if (init === 5) {
    botEnd();
  }
}

function botDelay(userAnswer) {
  setTimeout(() => {
    question.innerHTML = botSay(userAnswer)[init];
  }, [1000]);
  userData.push(answer.value);
  answer.value = "";
}

function botFinish() {
  question.innerHTML = "Thank you ya ${userData[0]} udah main ke X-Bot";
  answer.value = "";
}

function botEnd() {
  window.location.reload();
}
