{
    //
    type DestructureFn = (...num:number[]) => number
    const dFn:DestructureFn = (...num)=>{
        return num.reduce((acc:number,curr:number)=>{
            return acc+=curr
        },0)
    }

    console.log(dFn(4,5,6))
    console.log(dFn(6,8,29))
    //
}