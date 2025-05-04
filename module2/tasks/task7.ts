{
    //
        type TypeAssertion = (value:string|number)=>number

        const typeAssertion:TypeAssertion=(value)=>{

            if (typeof value==="string") return value.length
            else return value*value
        }

        console.log(typeAssertion("Hello Sadid"))
        console.log(typeAssertion(5))
    //
}