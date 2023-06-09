import React from "react";

interface fromA {
    numberA: number
    stringA: string
    booleanA: boolean
    specificFromA: ()=>number
}

const A = ({propsA}:{
    propsA: fromA
}) =>{
    const functionA = () =>{
        return(
            <>
                {console.log(propsA.numberA)}
                <div>Hello from A</div>
            </>
        )
    }

    return(
        <div>{functionA()}</div>
    )
}

export default A;