
// // // class Pizza{

// // //     constructor(pizzaType, pizzaSize){
// // //         this.type = pizzaType;
// // //         this.size = pizzaSize;
// // //         this.crust = 'original';
// // //     }

// // //     getCrust(){
// // //         return this.pizzaCrust;
// // //     }

// // //     setCrust(pizzaCrust){
// // //         this.pizzaCrust = pizzaCrust;
// // //     }

// // //     bake(){
// // //         console.log(
// // //             `Baking a ${this.size} ${this.crust} ${this.type} crust pizza withinn 10 mins.`
// // //         );
// // //     }
// // // }

// // // const myPizza = new Pizza("pepperOnion", "Large");
// // // myPizza.bake();

// // // myPizza.setCrust("thin");
// // // console.log(myPizza.getCrust())



// // // const myObj = {
// // //     name:"Vijendra",
// // //     hobbies:["eat", "sleep", "code"],
// // //     hello : function(){
// // //         console.log("hello");
// // //     }
// // // };

// // // console.log(myObj)
// // // myObj.hello();
// // // console.log(typeof myObj);

// // // const sendJSON = JSON.stringify(myObj);
// // // console.log(sendJSON);
// // // console.log(typeof sendJSON);

// // // console.log(sendJSON.name);

// // // const receiveJSON = JSON.parse(sendJSON);

// // // console.log(receiveJSON)

// // // console.log(receiveJSON.hobbies);
// // // console.log(typeof receiveJSON);


// // const view1 = document.getElementById("view1");
// // console.log(view1);

// // const view2 = document.querySelector("#view2");

// // // view1.style.display= 'none'

// // const views = document.getElementsByClassName("view");

// // console.log(views);

// // const sameViews = document.querySelectorAll('.view');

// // console.log(sameViews);

// // const divs = view2.querySelectorAll('div');

// // console.log(divs);

// // const sameDivs = view2.getElementsByTagName('div');
// // console.log(sameDivs);

// // const evenDivs = view2.querySelectorAll("div:nth-of-type(2n)");

// // console.log(evenDivs);

// // for(let i=0;i<evenDivs.length;++i){
// //     evenDivs[i].style.backgroundColor='darkblue';
// // }


// // const navText = document.querySelector('h2');
// // navText.textContent = "Hello World!!!!";

// // const navbar = document.querySelector('h2');

// // navbar.innerHTML = "<h3>Hello</h3>";


// const myPromise = new Promise((resolve, reject) => {
//     const error = true;

//     if(!error){
//         resolve("Yes, resolved the promise");
//     }else{
//         reject("No!, rejected the promise");
//     }
// })



// console.log(myPromise);

// myPromise.then(value => {
//     console.log(value);
//     return value + " 1";
// })
// .then(newValue => {
//    console.log(newValue);
// }).catch(err => {
//     console.error(err);
// })


// const users =  fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     return response.json();

// }).then(data => {
//     data.forEach(user => {
//         console.log(user);
//     })
// })

// console.log(users);

const myUsers = {
    userList : []
}

const getAllUsersEmails  = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })

    console.log(userEmailArray);
}

getAllUsersEmails();

const myCoolFunction = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const jsonUserData = await response.json();
    return jsonUserData;
}



const anotherFunc = async() => {
    const data = await myCoolFunction();

    myUsers.userList = data;

}

anotherFunc();

console.log(myUsers.userList);