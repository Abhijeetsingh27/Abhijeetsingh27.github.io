// spread operator


const marks ={
    english:20,
    math:40,
    science:50,

};
const newMarks={...marks,social:60};
console.log(newMarks);

let students=['A','B','C','D']
students=[...students,"E"]
console.log(students);