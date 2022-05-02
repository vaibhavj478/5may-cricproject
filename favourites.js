// write js code here corresponding to favourites.html


let favouritesARR =  JSON.parse(localStorage.getItem("favourites")) || []


console.log(favouritesARR);

function displayFun(arr){

    arr.forEach(function(el,ind){

        let tr = document.createElement("tr");

        let td1 = document.createElement("td")
            td1.innerText = el.matchNumber

        let td2 = document.createElement("td")
        td2.innerText = el.teamA
        let td3 = document.createElement("td")
        td3.innerText = el.teamB
        let td4 = document.createElement("td")
        td4.innerText = el.date
        let td5 = document.createElement("td")
        td5.innerText = el.venue;

        let td6 = document.createElement("td")
        td6.innerText = "Delete";
        td6.style.color ="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){

            myDelete( favouritesARR,el,ind);
        })
       
        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);

    });
    
}

 function myDelete(arr,el,ind){

    
    let newArr=arr.filter(function(element){

        return element.matchNumber != el.matchNumber;
    });
       

        console.log(arr,el,ind);
        console.log(newArr);


           localStorage.setItem("favourites",JSON.stringify(newArr)) ;
        
            window.location.reload()
 }

displayFun(favouritesARR)