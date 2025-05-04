{
    //
    type User = {
        name:string;
        email:string;
    }
    type Admin = {
        adminLavel:string
    }
    type AdminUser = User & Admin

    type interSectionFnType = (user:AdminUser) => string
    const Fn:interSectionFnType = (user)=>{
        return `The user's name is ${user.name} and email ${user.email}`
    }

    console.log(Fn({name:"Md Abdullah al sadid",email:"sadid@gmail.com",adminLavel:"Institue Admin"}))
    //
}