const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");

diaSemana.textContent = getWeekDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();

function getWeekDay(){
    const date = new Date();
   let days = ["domingo", "segunda=feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];
   return days[date.getDay()];
}

function getCurrentHour(){
    const date = new Date();
    return date.getHours() + ";" + date.getMinutes() + ";" + date.getSeconds();
}


