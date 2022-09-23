const quotesDiv = [
    {quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
author:'Nelson Mandela'},
{quote:'The way to get started is to quit talking and begin doing.',
author:'Walt Disney'},
{quote:'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
author:'Steve Jobs'},
{quote:'If life were predictable it would cease to be life, and be without flavor.',
author:'Eleanor Roosevelt'}

]



window.onload = init;
function init(){
start()
quotes()
}

   
   
const button = document.getElementById('new-quote')
const text = document.getElementById('text')
const author = document.getElementById('author')

button.addEventListener('click',function quotes(){
   let size = quotesDiv.length ;
   let randomSize = Math.floor(Math.random() * size);
   let randomQuote = quotesDiv[randomSize];
   

    text.innerText = randomQuote.quote
    author.innerText = randomQuote.author

    


})
    body.onload() = start;
    function start(){
        text.innerText = quotesDiv[0].quote
        author.innerText = quotesDiv[0].author
    }
    


