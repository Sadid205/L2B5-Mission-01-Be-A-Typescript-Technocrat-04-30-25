{
    //
    type User = {name:string,email:string}
    const checkKey= <X,Y extends keyof X> (obj:X,key:Y)=>{
        return obj[key]
    }

    const newUser:User = {name:"sadid",email:"sadid@gmail.com"}
    console.log(checkKey<User,"email">(newUser,"email"))
    //
}