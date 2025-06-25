let cart={};
const products=[
    {
        id: 1,name:"Product 1",price:100
    },
    {
        id: 2,name:"Product 2",price:200
    },
    {
        id: 3,name:"Product 3",price:300
    },
    {
        id: 4,name:"Product 4",price :400
    },
]
const showProducts=()=>{
    let str=" ";
    products.map((value)=>{
        str+=`${value.id}-${value.name}-${value.price}\n`;
    });
   console.log("**Product List**");
   console.log(str);
}
showProducts();

const addToCart=(id)=>{
    cart={...cart,[id]:1};
  
};
addToCart(1);
addToCart(3);
addToCart(4);




const showCart=()=>{
    let str=" ";
    products.map(value=>{
        if(cart[value.id]>0){
       
        str+=`${value.name}-${value.price}-${cart[value.id]*value.price}\n`

    }
});
    console.log("**MY Cart**");
    console.log(str);
   
    
};
showCart();




const increment=(id)=>{
    cart={...cart,[id]:(cart[id] ||0)+1};
};
increment(1);
console.log("Product added");
showCart();


const decrement=(id)=>{
    cart={...cart,[id]:cart[id]-1};
};
decrement(1);
console.log("Product removed");

showCart();


const showordervalue=products.reduce((sum,value)=>{
    return sum+value.price*(cart[value.id]??0);
    },0);
    console.log(`Your total order value = ${showordervalue}`);



