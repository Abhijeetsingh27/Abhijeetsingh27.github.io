// functions with argument

// function add(a,b){
//     return a+b;
// }
// let result =add(4,4);
// console.log(result);



function add(){
    console.log(arguments);
    console.log(arguments.length);
}

add(4,5,6,7,8,9,4)