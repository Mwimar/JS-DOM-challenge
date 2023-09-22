for (let i = 10; i <=20; i++){
    console.log(i)
};


//for of loop used for arrays
const users = ['eenie', 'meenie', 'miney', 'moe'];
for (const user of users) {
    console.log(user)
}


const loggedInUser = {
    userName: 'Mwima',
    age: 25,
    isAdmin: true

};


//for in loop for objects
for (const propertyName in loggedInUser) {
    console.log(propertyName + loggedInUser[propertyName]);
    
}

let isFinished = false;

//while loop for boolean properties
while (!isFinished) {
    isFinished = confirm('Are You Done?');
    
}
console.log('Done!');