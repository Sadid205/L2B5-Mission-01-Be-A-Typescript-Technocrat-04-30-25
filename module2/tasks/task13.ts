{
    //
    const GenericFn= <T>(param:T[]):T[]=>{
        return [...new Set(param)]
    }   

    console.log(GenericFn<number>([33,44,22,33]))
    //
}