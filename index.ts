
const userFakeDb = {
    name: "Testaaja",
    age: 35,
    password: "salasana"
}

type UserFromDb = typeof userFakeDb

type LoginReturnData = UserFromDb


function login(user: Partial<UserFromDb>): LoginReturnData {

    if (userFakeDb.name !== user.name) {

        throw new Error("Tarkista käyttäjänimi ja salasana", {
            cause: "Käyttäjänimeä ei löytynyt"
        })

    }

    if (userFakeDb.password !== user.password) {

        throw new Error("Tarkista käyttäjänimi ja salasana", {
            cause: "Salasanat ei täsmää"
        })

    }

    return userFakeDb
}

try {

    const userFromLogin = login({
        name: 'Pena',
        password: '12345',
    })

    console.log(userFromLogin)

} catch (error) {

    console.log(error)
}


const userFromLogin2 = login({
    name: 'Testaaja',
    password: 'salasana',
})

console.log(userFromLogin2)