"use strict";
let nextUserId = 1;
const usersObj = {
    id: 1,
    username: 'folly',
    role: 'admin'
};
//!
const users = [
    {
        id: 1,
        username: 'folly',
        role: 'admin'
    },
    {
        id: 2,
        username: 'babs',
        role: 'contributor'
    },
    {
        id: 1,
        username: 'akin',
        role: 'member'
    },
];
let PUser = [];
//? back
function UpdateUser(id, update) {
    let foundUser = users.find(user => user.id === id);
    if (!foundUser) {
        console.log('user not found');
        return;
    }
    Object.assign(foundUser, update);
}
const AddNewUser = (newUser) => {
    const user = Object.assign({ id: nextUserId++ }, newUser);
    PUser.push(user);
    return user;
};
const AddNewUserOmit = (newUser) => {
    const user = Object.assign({ id: nextUserId++ }, newUser);
    PUser.push(user);
    return user;
};
UpdateUser(1, { username: 'folly' });
UpdateUser(2, { username: 'mike' });
UpdateUser(3, { role: "admin" });
UpdateUser(3, { role: "admin" });
AddNewUser({ username: 'mon' });
AddNewUser({ role: 'admin' });
AddNewUser({ username: 'came' });
AddNewUserOmit({ username: 'came', role: 'admin' });
AddNewUserOmit({ username: 'came', role: 'admin' });
AddNewUserOmit({ username: 'came', role: 'admin' });
console.log(PUser, 'partial');
//?
//! declaration
function UpdateMe() { }
;
//! expression
let update = function () { };
//! name 
let updateNme = function updateUser() { };
//! arrow
const UpdateUserf = () => { };
//! iife
(function () {
    // code here runs immediately
})();
//! method
const user = {
    UpdateMe() {
        // method code
    }
};
//! constructor
function User(name) {
    // this.name = name;
}
