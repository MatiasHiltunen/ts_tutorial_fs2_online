
const userFakeDb = {
    name: "Testaaja",
    age: 35,
    password: "salasana"
}

type UserFromDb = typeof userFakeDb

type LoginReturnData = UserFromDb | undefined


function login(user:Partial<UserFromDb>): LoginReturnData {

    if(userFakeDb.name === user.name && userFakeDb.password === user.password){

        return userFakeDb

    }

}

const userFromLogin = login({
    name: 'Pena',
    password: '12345',
})

console.log(userFromLogin)

const userFromLogin2 = login({
    name: 'Testaaja',
    password: 'salasana',
})

console.log(userFromLogin2)