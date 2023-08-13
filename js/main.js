
var quotes = [
    {
     quote: '“Be yourself; everyone else is already taken.”',
     author: '― Oscar Wilde'
    },
    {
     quote: '“So many books, so little time.”',
     author: '― Frank Zappa'
    },
    {
     quote: '“A room without books is like a body without a soul.”',
     author: '― Marcus Tullius Cicero'
    },
    {
     quote: '“Be the change that you wish to see in the world.”',
     author: '― Mahatma Gandhi'
    },
    {
     quote: '“If you tell the truth, you don\'t have to remember anything.”',
     author: '― Mark Twain'
    },
    {
     quote: '“A friend is someone who knows all about you and still loves you.”',
     author: '― Elbert Hubbard'
    },
    {
     quote: '“To live is the rarest thing in the world. Most people exist, that is all.”',
     author: '― Oscar Wilde'
    },
    {
     quote: '“ thing in the world. Most people exist, that is all.”',
     author: '― Oscar Wilde'
    },
    {
     quote: '“We accept the love we think we deserve.”',
     author: '― Stephen Chbosky'
    },
    {
     quote: '“It does not do to dwell on dreams and forget to live.”',
     author: '― J.K. Rowling'
    },

];

function showquote(){
    var x = Math.floor(Math.random() * 10)
    document.getElementById("quote").innerHTML=`${quotes[x].quote}`  
    document.getElementById("author").innerHTML=`${quotes[x].author}`  
}