function TestComponent(){
    const firstName = "Prasanna"
    const lastName = "Shanmugarjah" 
    const date = new Date()
    
    return (
        <div>
            <h1> Hello { TimeBasedGreeting(date.getHours()) +" : "+   firstName + " " + lastName} </h1>
            <h3> You are genius and you are making a better world!</h3>
            <h4>The time now is {date.getHours() +" : "+ date.getMinutes() + " : " + date.getSeconds()} </h4>
            <h2>Any time is good for you!</h2>
        </div>
    )
}

function TimeBasedGreeting( hourOfTime){
    let greeting = ""
    if(hourOfTime < 13){
        greeting = "Good Morning, "
    }
    else if (hourOfTime < 17 ){
        greeting = "Good Afternoon"
    }
    else {
        greeting = "Good Evening"
    }
    return greeting
}
export default TestComponent;