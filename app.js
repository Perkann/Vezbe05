function menjanjeBoje(boja){
    let obrisiDugmad= document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

menjanjeBoje("blue");

let menjanjeBojeA=(boja)=>{
    let obrisiDugmad= document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

menjanjeBojeA("green");
let obrisiDugmad= document.getElementsByClassName("obrisi");

let menjanjeBojeB=(boja)=>Array.from(obrisiDugmad= document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);

menjanjeBojeB("purple");



for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click",function(e){
        console.log(this);
        console.log(this.parentNode);
        let elZaBrisanje=this.parentNode;
        let lista=document.getElementById("lista");
        lista.removeChild(elZaBrisanje);

    })
}

function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje=document.querySelector("#dodaj-destinaciju input")
    let nazivDestinacije=inputPolje.value.trim();
    if(nazivDestinacije){
        let lista=document.getElementById("lista");
        let stavkaListe=document.createElement("li");
        stavkaListe.innerHTML=`<span class="naziv">${nazivDestinacije}</span>
        <span class="obrisi">obriši</span>`;
        lista.appendChild(stavkaListe);
        inputPolje.value="";
    }
}

let forma=document.forms["dodaj-destinaciju"];
forma.addEventListener("submit", dodajDestinaciju);