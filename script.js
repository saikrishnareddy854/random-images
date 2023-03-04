// data
const Quotes=[{
          
            image:`nature.jpg`},
            
                {
                 image:`222.webp`},
                    
                         ]
                 
//access the elements
const DisplayElem=document.getElementById('Display') ;
const AuthorElem=document.getElementById('Author') ;
const BtnElem=document.getElementById('generate') ;
const id=document.getElementById('id1');

//function to generate different quotes
const RandomQuote=()=>{
    //logic to generat random quotes
    let index=Math.floor(Math.random()*(Quotes.length))
    //to dis[play the out put of the quote
   
    // // to display the out put of the author
   
    id.src=Quotes[index].image

}
// btn functionally
//btn.onclick=randomQuote
BtnElem.addEventListener('click',RandomQuote)