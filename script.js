const paragraph = document.querySelector(".quote")
const quotesTenBtn = document.querySelector(".tenQuotes-btn")
const linkForTen = "https://api.quotable.io/quotes/random?limit=10"
const clearBtn = document.querySelector('.clear-btn')
const newDiv = document.querySelector(".newDiv")
const getNewbtn = document.querySelector('.getNew-btn')
const quoteLink = 'https://api.quotable.io/random'


async function fetchdata(){
    try{
        const response = await fetch(quoteLink);
        const data = await response.json();
        paragraph.innerHTML = data.content + " (" + data.author + ")"
        // console.log(data)
    } catch (err){
        console.log(err)
    }  
}


async function fetchDataTen(){
  try{
    newDiv.innerHTML = '';
    const response = await fetch(linkForTen)
    const data = await response.json()
    const objects = data.map((el) =>{
    const p1 = document.createElement("p")
    newDiv.appendChild(p1)
    p1.innerHTML = `${el.content}   (Author : ${el.author}.)`
    });
    paragraph.innerHTML = '';
    
    
  } catch (err) {
    console.log(err)
  }
  }


// function giveTenQuotes(){
//     console.log('clicked')
//     fetchData()
// }

function clearQuotes() {
  newDiv.innerHTML = '';
  paragraph.innerHTML = '';
  console.log
}


quotesTenBtn.addEventListener('click', fetchDataTen)
clearBtn.addEventListener('click', clearQuotes)
getNewbtn.addEventListener('click', fetchdata)