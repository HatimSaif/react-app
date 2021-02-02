export function Msg(props){
    return(
        <div>
            <h1>Count number is: {props.counter}</h1>
            <h3>Good {props.eveningCheck ? 'Evening' : 'Night'} Lovely People :D</h3>
        </div>
    )
}