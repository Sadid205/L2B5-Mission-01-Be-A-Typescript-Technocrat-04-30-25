{
    //
    // union types 
    // string literal types
    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

    // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    // type Developer =  FrontendDeveloper | FullstackDeveloper

    // const newDeveloper:FrontendDeveloper = "juniorDeveloper"

    // type User = {
    //     name:string;
    //     email?:string;
    //     gender:"male" | "female";
    //     bloodGroup:'O+' | 'A+' | 'AB+'
    // }

    // const user1:User = {
    //     name:"persian",
    //     gender:"male",
    //     bloodGroup:'O+'
    // }

    type FrontendDeveloper = {
        skills:string[];
        designation1:'Frontend developer'
    }
    type BackendDeveloper = {
        skills:string[];
        designation2:'Backend developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper:FullstackDeveloper = {
        skills:["HTML",'CSS','EXPRESS'],
        designation1:"Frontend developer",
        designation2:'Backend developer'
        
    }
}