{
    //
    type UserType = {
        name:string;
        age:number
    }
    const newPromise = ():Promise<UserType>=>{
        return new Promise((resolve,reject)=>{    
            setTimeout(()=>{
                try{
                    // throw new Error("Something went wrong!")
                    resolve({
                        name:"Sadid",
                        age:40
                    })
                } catch(e){
                    reject(e)
                }
            },2000)
        })
    }
    newPromise()
    .then((user:UserType)=>console.log(user))
    .catch((error)=> console.log(error))
    //
}