{
    //
    type Employee = {
        name:string;
        email:string;
        salary:number;
        address:{
            city:string;
        }
    }

    const emp1:Employee = {
        name:"sadid",
        email:"sadid@gmail.com",
        address:{
            city:"ctg",
        },
        salary:4000,
    }

    type FnType=(emp:Employee)=>string

    const getEmployeeCity:FnType = (emp)=>{
        return emp.address?.city
    }

    console.log(getEmployeeCity(emp1))


    //
}