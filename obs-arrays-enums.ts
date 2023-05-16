
enum Role { ADMIN, READ_ONLY, AUTHOR }


const person = {
    name: "Maxmilian",
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN
}


let favouriteAcrivities: string[]

console.log(person)


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}