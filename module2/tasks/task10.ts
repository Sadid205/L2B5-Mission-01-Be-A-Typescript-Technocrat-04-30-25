{
    //
    type FnType = (name:string | null | undefined) => string | "Anonymous"

    const NullishCoalescing:FnType=(name)=>{
        return `${name??"Anonymous"}`
    }
    console.log(NullishCoalescing("Sadid"))
    console.log(NullishCoalescing(null))
    //
}