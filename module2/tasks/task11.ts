{
    //
    type FnType = (data:unknown) => string | number

    const unknownFn:FnType = (data)=>{
        if (typeof data==="string") return data.toUpperCase()
        if (typeof data==="number") return data*data
        throw new Error("Invalid data type")
    }
    console.log(unknownFn("Sadid"))
    console.log(unknownFn(5))
    // console.log(unknownFn(true))
    //
}