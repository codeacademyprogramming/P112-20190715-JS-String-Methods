"use strict";

/* Task 3 */ 


// let input1, input2;

// input1 = prompt("1 ededi daxil edin");
// input1 = Number(input1);

// input2 = prompt("2 ededi daxil edin");
// input2 = Number(input2);

// task3(input1, input2);

// function task3(i1, i2){
//     if(i1 >= i2){
//         console.log("2ci eded 1ciden boyuk olmalidir");
//         return;
//     }

//     for(let i = i1; i < i2; i++){
//         if(i % 2 == 0){
//             console.log(i);
//             let sum = 0; 

//             // for(let j = i; j < i2; j++ ){
//             //     sum = sum + j;
//             // }

//             let j = i;
//             while(j < i2){
//                 sum = sum + j;
//                 j++
//             }

//             console.log(sum);
//         }
//     }
// }


/* Task 2 */

task2(-5, 3);
task2(5, -3);
task2(0.1, 3);

function task2(x, y){
    if(x < 0 && y < 0){
        x = x * (-1);
        y = y * (-1);
    } else if(x < 0 || y < 0){
        x = x + 0.5;
        y = y + 0.5;
    } else if( !((x >= 0.5 && x <= 2.0) || (y >= 0.5 && y <= 2.0)) ){
        x = x / 10;
        y = y / 10;
    }

    console.log(x, y);
}


