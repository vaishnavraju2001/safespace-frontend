import React, { useState } from "react";
import Card from "./Card/Card";
import "./Faq.css";
import imag from "../../assets/bg-2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
const data = [
  {
    q: "What is mental health?",
    a: "We all have mental health which is made up of our beliefs, thoughts, feelings and behaviours.",
  },
  {
    q: "What do I do if the support doesn’t help?",
    a: "It can be difficult to find the things that will help you, as different things help different people. It’s important to be open to a range of approaches and to be committed to finding the right help and to continue to be hopeful, even when some things don’t work out.",
  },
  {
    q: " Can you prevent mental health problems?",
    a: "We can all suffer from mental health challenges, but developing our wellbeing, resilience, and seeking help early can help prevent challenges becoming serious.",
  },
  {
    q: "Are there cures for mental health problems?",
    a: "It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.",
  },
  {
    q: "What causes mental health problems?",
    a: "Challenges or problems with your mental health can arise from psychological, biological, and social, issues, as well as life events.",
  },
];
const Faq = () => {
  const slider = document.querySelector(".card-div");
  const [ind, setInd] = useState(0);
  function handleLeftClick() {
    setInd(ind - 30);
    slider.style.left = `${ind}px`;
  }
  function handleRightClick() {
    setInd(ind + 30);
    slider.style.left = `${ind}px`;
  }
  return (
    <div className="faq">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-container">
        <div className="button-div">
          <IconButton aria-label="left" onClick={handleLeftClick}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton aria-label="right" onClick={handleRightClick}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div className="card-div">
          {data.map((d) => {
            return <Card q={d.q} a={d.a} />;
          })}
        </div>
        <div className="bg-div">
          <img src={imag} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
