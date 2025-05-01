// destructuring
{

    const user = {
        id:345,
        name:{
            firstName:"Mezbaul",
            middleName:"Abedin",
            lastName: "Parsian"
        },
        contactNo:"0170000000",
        address:"Uganda"
    }

    const {contactNo, name:{middleName:midName}} = user

    // array destructuring
    const myFriends = ['chandler','joye','ross','rechel','monika','phoebe']

    const [,,bestFriend,...rest] = myFriends
}