{
    //
    type FnType = (message:string) => never
    const handleError:FnType = (message) =>{
        throw new Error(message)
    }
    handleError("Something went wrong!")
    //
}