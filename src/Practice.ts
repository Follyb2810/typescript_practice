type IUser ={
    id:number
    username:string
    role:'member' |'contributor' | 'admin'
}

type IUpdateuser ={
    username?:string
    id?:number
    role?:'member' |'contributor' | 'admin' 
}

type TUser = Partial<IUser>
let nextUserId =1;

const usersObj :IUser = {
    id:1,
    username:'folly',
    role:'admin'
}

//!

const users :IUser[]=[
    {
        id:1,
        username:'folly',
        role:'admin'
    },
    {
        id:2,
        username:'babs',
        role:'contributor'
    },
    {
        id:1,
        username:'akin',
        role:'member'
    },
]

let PUser:TUser[] =[]
//? back

function UpdateUser(id:number,update:TUser){
    let foundUser = users.find(user => user.id === id)
    if(!foundUser){
        console.log('user not found');
        return
    }
    Object.assign(foundUser,update)
}


const AddNewUser =(newUser:TUser) : TUser=>{
    const user :TUser ={
        id:nextUserId++,
        ...newUser
    }
    PUser.push(user)
    return user
}
const AddNewUserOmit =(newUser:Omit<IUser,'id' >) : TUser=>{
    const user :TUser ={
        id:nextUserId++,
        ...newUser
    }
    PUser.push(user)
    return user
}
UpdateUser(1,{username:'folly'})
UpdateUser(2,{username:'mike'})
UpdateUser(3, {role:"admin"})
UpdateUser(3, {role:"admin"})
AddNewUser({username:'mon'})
AddNewUser({role:'admin'})
AddNewUser({username:'came'})
AddNewUserOmit({username:'came',role:'admin'})
AddNewUserOmit({username:'came',role:'admin'})
AddNewUserOmit({username:'came',role:'admin'})
console.log(PUser,'partial')
//?


//! declaration
function UpdateMe() {};
//! expression
let update = function() {};
//! name 
let updateNme = function updateUser() {};
//! arrow
const UpdateUserf = () => {};
//! iife
(function() {
    // code here runs immediately
})();
//! method
const user = {
    UpdateMe() {
        // method code
    }
};
//! constructor
function User(name:string) {
    // this.name = name;
}

