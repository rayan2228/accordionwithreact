import React from "react";
import ShowData from "./AccordionData";

const Accordion = () => {
    return (
        <>
            <div className="main">
                <div className="item">
                    <h1>React Interview Questions</h1>
                    {ShowData}
                </div>
            </div>
        </>
    )
}
export default Accordion