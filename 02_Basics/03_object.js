// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Satya",
    "full name": "Satya Yadav",
    [mySym]: "mykey1",
    age: 18,
    location: "Siwan",
    email: "satya12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "satya@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function () {
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function () {
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

let arr = [1, 2, 3, 4, 5]

// let m1 = arr.map((val) =>{
//     return val
// } )

// Array.prototype.myMap = function (cb) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(cb(this[i], i, this))
//     }

//     return res;
// }

// let m1 = arr.myMap((val) => val * 2)
// console.log("m1", m1)

console.log(this)



const obj = {
    name: "Sattu",
    getName: function () {
        console.log(this.name)
    }
}

const obj2 = {
    name: "Sattu",
    getName: function () {
        console.log(this.name)
    },
    address: {
        city: "Siwan",
        getCity: function () {
            console.log(this.);

        }
    }
}


class Cls {
    constructor(){
        this.name = "Sattu"
    }
    
}

obj.getName()