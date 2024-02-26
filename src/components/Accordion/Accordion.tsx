import React from "react";


type AccordionProptype = {
    titleValue: string
}

function Accordion(props: AccordionProptype) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>

    </div>
}

type AccordionTitleProptype = {
    title: string
}

function AccordionTitle(props: AccordionTitleProptype) {
    console.log("AccordionTitle rendering")
    return <div>
        <h3>{props.title}</h3>
    </div>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default Accordion;