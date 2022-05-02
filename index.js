// write js code here corresponding to index.html
// You should add submit event on the form




let form = document.querySelector("#masaiForm")

let scheduleArr= JSON.parse(localStorage.getItem("schedule")) || []


   form.addEventListener("submit",myTeam);


   function myTeam(){

    event.preventDefault();

    let obj ={

        matchNumber : form.matchNum.value,
        teamA : form.teamA.value,
        teamB : form.teamB.value,
        date : form.date.value,
        venue: form.venue.value

    }


  scheduleArr.push(obj);

  localStorage.setItem("schedule", JSON.stringify(scheduleArr));

  window.location.href="matches.html"


   }