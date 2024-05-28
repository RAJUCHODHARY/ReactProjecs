import React, { useState } from "react";
import "./css/Company.css";

const Paragraph = ({ text }) => {
  return <p>{text}</p>;
};

const Container = ({ numParagraphs }) => {
  const paragraphs = [];
  for (let i = 0; i < numParagraphs; i++) {
    paragraphs.push(
      <Paragraph key={i} text={`(${i + 1}) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, consequatur!`} />
    );
  }

  return (
    <div className="container">
      {paragraphs}
    </div>
  );
};

const Company= () => {
  const [numParagraphs, setNumParagraphs] = useState(0);
const [state,setState]=useState();
  const handleAddParagraphs = (num) => {
    setNumParagraphs(num);
  };

  return (
    <div>
      <Container numParagraphs={numParagraphs} />
      <div className="footer">
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder=" enter para cteate value" />
        <button onClick={() => handleAddParagraphs(state)}>Add para</button>
       
      </div>
    </div>
  );
};

export default Company;
