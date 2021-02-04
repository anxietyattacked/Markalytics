import React, {useState, useEffect, useRef} from 'react'





const Questions = () => {
    const questions = ["How Do We Reach Our Customers?","Who Are Our Customers?","How Can We Bring in New Customers?", "What Is Our Marketing Strategy?"]
    const [count, setCount] = useState(0)
    const countRef = useRef(0)


useEffect(() => {

    const countInterval = setInterval(() => {
            if(countRef.current >= questions.length - 1){
                countRef.current = 0
                setCount(0)
            } else {
                countRef.current = countRef.current + 1 
            setCount(oldCount => oldCount + 1)
            }
            
        
    }, 2500)
    return function cleanup() {
    clearInterval(countInterval)
    }
}, [])

    return (
        <div className="question-container">
            <div className="question-title-container">
                <h3 className="question-title">Questions We Answer</h3>
                <h4 className="question">{questions[count]}</h4>
                </div>
        </div>
    )
}
export default Questions
