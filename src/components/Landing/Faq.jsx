import React from 'react'
import Questions from './MiniComponents/Questions'
import "../../App.css";
import style from "../../styles/Landing/Faq.module.css";
const Faq = () => {

  const problems = [
    {
      quest: "What is CollabZone?",
      ans: "CollabZone is a collaborative platform designed to connect entrepreneurs, innovators, and professionals. It provides tools and resources to facilitate partnerships, project management, and effective communication.",
    },
    {
      quest: "Is there a cost to use CollabZone?",
      ans: "",
    }, 
    {
      quest: "How can I find partners on CollabZone?",
      ans: "",
    },

    {
      quest: "How does project management work on the platform?",
      ans: "",
    },
 
    {
      quest: "Is there a cost to use CollabZone?",
      ans: "",
    },
  ];
  
  return (
    <div className={`${style.box}`}>

      <div className={`${style.left}`}></div>

      <div className={`${style.right}`}>
        <h1>Frequently Asked Questions</h1>
        <div className={`${style.qs}`}>
          {
            problems.map((data,idx)=>{
              return <Questions key={idx} question={data.quest} answer={data.ans}/>
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default Faq
