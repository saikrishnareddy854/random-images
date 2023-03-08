// data
const Quotes=[{
           quotes:`Take a much-needed break from your day to check out these 101 funny quotes we found in stand-up comedy, books, plays, celebrity Twitter and interviews as well as movies and TV shows, guaranteed to give you a quick chuckle.`,
            author:'sai'},
            
                {quotes:`Take a much-needed t these 101 funny quotes we found in stand-up comedy, books, plays, celebrity Twitter and interviews as well as movies and TV shows, guaranteed to give you a quick chuckle.`,
                 author:"saikrisnareddy"},
                    
                         ]
                 
//access the elements
const DisplayElem=document.getElementById('Display') ;
const AuthorElem=document.getElementById('Author') ;
const BtnElem=document.getElementById('generate') ;

//function to generate different quotes
const RandomQuote=()=>{
    //logic to generat random quotes
    let index=Math.floor(Math.random()*(Quotes.length))
    //to dis[play the out put of the quote
    DisplayElem.innerHTML=Quotes[index].quotes
    // // to display the out put of the author
    AuthorElem.innerHTML='~'+Quotes[index].author

}
// btn functionally
//btn.onclick=randomQuote
BtnElem.addEventListener('click',RandomQuote)