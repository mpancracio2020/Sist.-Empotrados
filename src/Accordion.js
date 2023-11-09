import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{ color : "white" , backgroundColor: "black" } }>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content" style={{ color : "white", backgroundColor: "black" } }>{content}</div>}
    </div>
  );
};

export default Accordion;
