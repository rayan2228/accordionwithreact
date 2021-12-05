import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
const AccordionElm = (props) => {
    const [isActive, setIsActive] = useState(false)
    const hideAndShow = () => {
        setIsActive(!isActive)
    }
    return (
        <>
            <div className="one" onClick={hideAndShow}>
                <span className="icon">{isActive ? <IndeterminateCheckBoxIcon /> : <AddBoxIcon />}</span>
                <span className="que">{props.que}</span>
            </div>
            <div className={isActive ? "show" : "two"}>
                <p className="ans">{props.ans}</p>
            </div>
        </>
    )
}
export default AccordionElm