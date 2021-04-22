import React from 'react'

const Quote= (props)=>{
    
    const quotes= [
    `“How far would you go to keep the hope of love alive?”― Nicholas Sparks`,
    `“Every day is a good day. There is something to learn, care and celebrate.”― Amit Ray`,
    `“Many bad days were preceded by a bad night’s sleep.”― Mokokoma Mokhonoana `,
    `“Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.”― Emily Dickinson`,
    `“Tomorrow's a good day for dying.”― Anthony T.Hincks `,
    '“a bad day is just a filler episode in our lives”― Nynetailed ',
    `“Even the worst days have an ending, and the best days have a beginning.”― Jennifer Coletta `,
    `“A good teacher can inspire hope, ignite the imagination, and instill a love of learning.”― Brad Henry`,
    `“Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.”― Jonas Salk`,
    `“Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.”― Maya Angelou`,
    `“Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.”― Albert Einstein`,
    `“A dream is the bearer of a new possibility, the enlarged horizon, the great hope.”― Howard Thurman`,
    `“To live without hope is to cease to live.” ― Fyodor Dostoyevsky`,
    `“There is no good day or bad day, only good or bad actions.”― Amit Kalantri`,
    `“Hope is being able to see that there is light despite all of the darkness.” ― Desmond Tutu`,
    `“If you want to live a happy life, tie it to a goal. Not to people or things.” ―Albert Einstein`,
    `“Love is when you meet someone who tells you something new about yourself.”―Andre Breton`
    ]
    let oneQuote= quotes[Math.floor(Math.random()*quotes.length)]
    return(
        <div className="bg-5 rounded p-2 text-center mt-2">
            <span className="f-3 text-white fs-6">
                {oneQuote.split('―')[0]}
                <div className="text-right">
                    <br/><span className="fs-7">-{oneQuote.split('―')[1]}</span>    
                </div>
            </span>
        </div>
    )
}

export default Quote;