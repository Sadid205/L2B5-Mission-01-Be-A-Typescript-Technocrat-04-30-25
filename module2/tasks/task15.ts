{
    //
    const isString = (value:unknown):value is string=>{
        return typeof value==="string"

    }

    const printUpperCase = (value:unknown)=>{
        if (isString(value)){
            console.log(value.toUpperCase())
        } else{
            console.log("Please input a string.")
        }
    }

    printUpperCase("sadid")
    printUpperCase(true)

    //
}