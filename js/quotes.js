const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로"
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘 할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "톰 모나건"
    },
    {
        quote: "도전이 삶을 흥미롭게 만든다.",
        author: "존 C. 맥스웰"
    },
    {
        quote: "성공은 가장 좋은 교사이자 실패는 가장 뛰어난 조언자이다.",
        author: "존 C. 맥스웰"
    },
    {
        quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 미리 옳다.",
        author: "헨리 포드"
    },
    {
        quote: "행복은 자신의 미소에 달려있다.",
        author: "테레사의 힐"
    },
    {
        quote: "불가능은 소년의 꿈이다.",
        author: "나폴레옹 보나파르트"
    },
    {
        quote: "가장 훌륭한 혁신은 자신이 원하는 것을 찾아내는 것이다.",
        author: "스티브 잡스"
    },
    {
        quote: "일하는 것이 성공의 비결이다.",
        author: "토마스 에디슨"
    },
    {
        quote: "노력이 배신하지 않는 한, 당신은 반드시 성공할 것이다.",
        author: "존 C. 맥스웰"
    }
];


const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child")

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.author;

