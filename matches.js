// write js code here corresponding to matches.html

let scheduleArr = JSON.parse(localStorage.getItem("schedule")) || [];

console.log("hi");

function displayFun(arr) {
  arr.forEach(function (el) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.matchNumber;

    let td2 = document.createElement("td");
    td2.innerText = el.teamA;
    let td3 = document.createElement("td");
    td3.innerText = el.teamB;
    let td4 = document.createElement("td");
    td4.innerText = el.date;
    let td5 = document.createElement("td");
    td5.innerText = el.venue;

    let td6 = document.createElement("td");
    td6.innerText = "favourites";
    td6.style.color = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      myFavourite(el);
    });

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}
displayFun(scheduleArr);

let favouritesARR = JSON.parse(localStorage.getItem("favourites")) || [];

function myFavourite(el) {
  favouritesARR.push(el);

  localStorage.setItem("favourites", JSON.stringify(favouritesARR));
}

console.log(scheduleArr);


let filterVenue =  document.querySelector("#filterVenue")


        filterVenue.addEventListener("change" ,function(){



            if(filterVenue.value ==="none"){

                displayFun(scheduleArr);
            }else{

               let newArr= scheduleArr.filter(function(el){

                   return el.venue === filterVenue.value
                });


                displayFun(newArr);
                console.log(newArr);

            }


        });
