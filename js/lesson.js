"use strict";

// function sayHi(message, a){
//     console.log(message);

//     a();
// }
// let newFunc = sayHi;

// let newFunc2 = function(){
//     console.log("Func 2");
// };


// let newFunc3 = () => alert("Function 3");
// newFunc3();

// let name = "Gunel ";
// console.log(name.length);

let text = "       İstifadəçi 2 ədəd daxil etsin. Lazımdır 2-ci ədəd birincidən böyük olmalıdır. Daxil edilmiş ədəd aralığında olan bütün cüt ədədləri tapmaq lazımdır. safddsa";
// console.log(text.indexOf("ədəd", 15));
// console.log(text.lastIndexOf("lazımdır", 20));

// console.log( text.substr(5, 3) );

// console.log(text.replace( /ədəd/g, "say"));

// console.log(text.toLowerCase() );
// let name = "Huseyn"

// console.log( text.trim() );
// console.log( text );

// console.log( text.charCodeAt(10) );


// let name = prompt("Adinizi daxil edin");

// for(let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }



let count = 0;
for(let i = 0; i < text.trim().split(" ").length; i++){
    if(text.trim().split(" ")[i] == "ədəd"){
        count++;
    }
}

console.log(count);

console.log(text.trim().split(" ")[15]);


