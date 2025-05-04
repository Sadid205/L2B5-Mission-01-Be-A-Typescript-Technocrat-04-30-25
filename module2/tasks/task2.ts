{
    interface baseRole {
        admin:string;
        user:string;
        guest:string;
    }

    type FnType = <T extends keyof baseRole> (name:string,age:number,role:T)=>void

    const fn:FnType = (name,age,role) =>{
        console.log({name,age,role})
    }

    fn("sadid",22,"admin")
}