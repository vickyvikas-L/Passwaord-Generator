let passwordBox = document.getElementById("password");
console.log(password);

let length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!@#$%^&*()_+';
const allChars = upperCase+lowerCase+number+symbols;



function createPassword(){ 
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length) ]
    
    password += lowerCase[Math.floor(Math.random() * lowerCase.length) ]
    
    password += number[Math.floor(Math.random() * number.length) ]
    
    password += symbols[Math.floor(Math.random() * symbols.length) ]

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length) ];
        console.log(password);
        
    }
    passwordBox.value = password
}




// console.log( Math.floor(Math.random() * upperCase.length) );
// console.log(upperCase[14]);

































// const passwordBox = document.getElementById("password");
// const length = 12;  

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "@#$%^&*()_+{}<>?-=";
// const allChars = upperCase + lowerCase + number + symbol;

// function createPassword(){
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     password += number[Math.floor(Math.random() * number.length)];
//     password += symbol[Math.floor(Math.random() * symbol.length)];// add the random value from the symbol

//     while (length > password.length){
//         password += allChars[Math.floor(Math.random() *allChars.length)];  // it will continue to add random char unless the password length is 12 now the password length is 12 we can display it
//     }
//     passwordBox.value = password;
// }

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy");
// }

// const passwordBox = document.getElementById("password");
// console.log(passwordBox);

// const length = 12;

// let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// let number  = "123456789";
// let symbols = "!@#$%^&*()_+";
// let allChars = upperCase+lowerCase+number+symbols;



// function createPassword(){
//     password = "";

//     // password += upperCase[Math.floor( Math.random() * upperCase.length)]
//     // password += lowerCase[Math.floor( Math.random() * lowerCase.length)]
//     // password += number[Math.floor( Math.random() * number.length)]
//     // password += symbols[Math.floor( Math.random() * symbols.length)]

//     while(length > password.length){
//          password += allChars[Math.floor( Math.random() * allChars.length)];
//          console.log(password);
//     }
//     passwordBox.value = password

// }


// console.log( Math.floor( Math.random() * upperCase.length));
// console.log(upperCase[18]);





























// let btn = document.getElementById('button');
// console.log(btn);

// let Password = document.getElementById('password');
// console.log(password);


// let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// let number = '1234567890';
// let symbols = "!@#$%^&*()_";
// let allChars = upperCase+lowerCase+number+symbols
// let length = 12;

// function createPassword(){

//     let password = ''

//     password += upperCase[Math.floor(Math.random() *upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
//     password += number[Math.floor(Math.random() *number.length)];
//     password += symbols[Math.floor(Math.random() *symbols.length)];

//     while(length >password.length){
//     password += allChars[Math.floor(Math.random() *allChars.length)];

// }
// // passwordBox.
// value = password;
// Password.value = password




// }

// console.log(Math.floor(Math.random() *upperCase.length) );

// console.log(upperCase[12]);





// function add(){
//     let a = 10;
//     let b = 10;
//     console.log(a+b);
// };
// add()









// console.log(document.getElementById('button'));

// console.log(document.getElementById('password'));

// let Password = document.getElementById('password')


// let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// let number = '1234567890';
// let symbols = '!@#$%^&*();';
// let allChars = upperCase + lowerCase + number + symbols;
// let length = 12;

// function createPassword() {
//     let password = '';

//     password += upperCase[Math.floor(Math.random() * upperCase.length)]
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
//     password += number[Math.floor(Math.random() * number.length)]
//     password += symbols[Math.floor(Math.random() * symbols.length)]

//     while(length > password.length){

//     password += allChars[Math.floor(Math.random() * allChars.length)]

// }

// Password.value = password

// }





//   console.log(Math.floor(Math.random()   *upperCase.length));
//   console.log(upperCase[11]);


// document.getElementById('div')









// let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
// console.log(upperCase.length);


// console.log(Math.floor(Math.random() * upperCase.length));
// console.log(upperCase[11]);


// int a = 12;
// a = 'hello'

// let a;
// console.log(a);

// let a = null;
// console.log(typeof a);



// let a = 1.12;
// console.log(typeof a);


// let var const

// let a = 12;
//  a =13;
// console.log(a);


// var a = 12;
//  a =15;
// console.log(a);


// const a = 12;
//  a = true
// console.log(a);



// {
//     let a = 12;
    
    
// }
// console.log(a);


// function add(){
//     let a =10;
//     let b  = 20;
//     console.log(a+b);
    
// }
// add()

// let isName = 'Tome'
// let age = 29
// let city = 'new work'