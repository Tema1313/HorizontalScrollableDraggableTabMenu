import React from "react";

interface fromB {
    numberB: number
    stringB: string
    booleanB: boolean
    specificFromB: ()=>number
}

const B = ({propsB}:{
    propsB: fromB
}) =>{
    const functionB = () =>{
        return(
            <>
                {console.log(propsB.stringB)}
                <div>Hello from B</div>
            </>
        )
    }

    return(
        <div>{functionB()}</div>
    )
}

export default B;