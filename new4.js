let key="e30fb8b1db1943a3b435a0577de62f28";
let cardData=document.querySelector(".cardData");
let SearchBtn=document.getElementById("searchBtn");
let inputData=document.getElementById("inputData");
let srhType=document.getElementById("type");

const getData=async(input)=>{
    let res=await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData=await res.json();
    console.log(jsonData.articles);

    srhType.innerText="Search : "+input;
    inputData.value="";
    cardData.innerHTML="";
    jsonData.articles.forEach(function(articles) {
        console.log(articles);

        let divs=document.createElement("div");
        divs.classList.add("card");
        cardData.appendChild(divs);
    
        divs.innerHTML=`
              <img src="${articles.urlToImage}" alt="">
              <h3>${articles.title}</h3>
              <p>${articles.description}</p>
        `
        divs.addEventListener("click",function(){
            window.open(articles.url)
        })
    }); 
}

window.addEventListener("load",function(){
    getData("India")
})

SearchBtn.addEventListener("click",function(){
    let inputText=inputData.value;
    getData(inputText);
})

function navclick(navname){
    if(navname=="Politic"){
        document.getElementById("Politic").style.color="rgb(0, 140, 255)";
        document.getElementById("Sports").style.color="Black";
        document.getElementById("Technology").style.color="Black";
    }
    if(navname=="Sports"){
        document.getElementById("Politic").style.color="black";
        document.getElementById("Sports").style.color="rgb(0, 140, 255)";
        document.getElementById("Technology").style.color="Black";
    }
    if(navname=="Technology"){
        document.getElementById("Politic").style.color="black";
        document.getElementById("Sports").style.color="Black";
        document.getElementById("Technology").style.color="rgb(0, 140, 255)";
    }
    
    getData(navname)
}
