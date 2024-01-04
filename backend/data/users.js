import bcrypt from 'bcryptjs';

//this is fake data to populate DB
const users =[
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('1234656', 10),// 2nd param: salt
        isAdmin: true,
},
{
    name: 'John Doo',
    email: 'john@email.com',
    password: bcrypt.hashSync('1234656', 10),// 2nd param: salt
    isAdmin: false,
},
{
    name: 'Jane Joh',
    email: 'jane@email.com',
    password: bcrypt.hashSync('1234656', 10),// 2nd param: salt
    isAdmin: false,
}
];
export default users;