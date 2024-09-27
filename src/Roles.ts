// type IUser = {
// username:string,
// role : 'guest' | 'member' | 'admin'
// }
// //! loop 1
// type IUserPermissions = {
//     [K in IUser['role']]: boolean;
// };

// const permissions: IUserPermissions = {
//     guest: true,
//     member: false,
//     admin: true,
// };

// //! lop 2 key of

// type UserKeys = keyof IUser; // 'username' | 'role'

// const userProperties: UserKeys[] = ['username', 'role']; // Array of keys

// //! loop2 
// type DefaultValues<T> = {
//     [K in keyof T]: T[K] extends string ? '' : T[K] extends boolean ? false : T[K];
// };

// const defaultUser: DefaultValues<IUser> = {
//     username: '',
//     role: 'guest', // Default to one of the roles
// };

// //! loop 3
// type UserRoles = 'guest' | 'member' | 'admin';
// type UserPermissions = Record<UserRoles, boolean>;

// const permissionsn: UserPermissions = {
//     guest: false,
//     member: true,
//     admin: true,
// };

// //! loop 5
// const user: IUser = {
//     username: 'john_doe',
//     role: 'member',
// };

// for (const key of Object.keys(user) as Array<keyof IUser>) {
//     console.log(`${key}: ${user[key]}`);
// }