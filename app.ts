const person: {
    name: string
    age: 30,
    hobbies: string[],
    role: [number, string]
} = {
    name: "Maxmilian",
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: [2, 'author']
}

person.role.push()

let favouriteAcrivities: string[]

console.log(person)


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}