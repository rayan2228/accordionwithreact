import AccordionElm from "./AccordionElm";
const AccordionData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a Javascript Library"
    },
    {
        id: 2,
        question: "Why React is so pupilar?",
        answer: "ReactJS has become highly popular because of its extra simplicity and flexibility"
    },
    {
        id: 3,
        question: "What is JSX??",
        answer: "JSX stands for JavaScript XML.It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function."
    },
    {
        id: 4,
        question: "What are the differences between functional and class components?",
        answer: "Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ."
    },
  
]
const ShowData = AccordionData.map((val) => {
    return (
        <AccordionElm
            key={val.id}
            que={val.question}
            ans={val.answer}
        />
    )
})


export default ShowData