// let cartItems=[{
//     productName:"laptop bag",
//     price:10,
//     qty:1
// },
// {
//     productName:"apple bag",
//     price:20,
//     qty:1

// },
// {
//     productName:"samsung bag",
//     price:200,
//     qty:1
// }]
// function totalCost(cartItems){
//     let initialValue=0
//     let totalCost=cartItems.reduce((a,b)=>{return a+b.price},initialValue)
//     console.log(totalCost)
// }
// totalCost(cartItems)
//output:230

let cartItems=[{
    productName:"laptop bag",
    price:10,
    qty:2
},
{
    productName:"apple bag",
    price:20,
    qty:10

},
{
    productName:"samsung bag",
    price:200,
    qty:1
}]

// function totalCost(cartItems){
//     let initialValue=0
//     let totalCost=cartItems.reduce((a,b)=>{return a+(b.price*b.qty)},initialValue)
//     console.log(totalCost)

// }
// totalCost(cartItems)
//output:420

//writing console outside function 
// function totalCost(cartItems){
//     let initialValue=0
//     let totalCost=cartItems.reduce((a,b)=>{return a+(b.price*b.qty)},initialValue)
//     return totalCost
// }
// const result =totalCost(cartItems)
// console.log(result)
//output:240--if qty=1 in second object
//output:420

// function totalCost(cartItems){
//     let totalCost=cartItems.reduce((accumulator,eachObject)=>{return accumulator-(eachObject.price*eachObject.qty)},1000)
//     return totalCost
// }
// const result =totalCost(cartItems)
// console.log(result)

//output:580

function totalCost(cartItems){
    let totalCost=cartItems.reduce((accumulator,eachObject)=>{return accumulator+(eachObject.price*eachObject.qty)},0)
    return totalCost
}
function discountedPrice(totalPrice,percentage){

    return (totalPrice*(100-percentage))/100
}
const withoutDiscount=totalCost(cartItems)
console.log(withoutDiscount,"without Discount")
let percentageDiscount=10
const finalPriceWithDiscount=discountedPrice(withoutDiscount,percentageDiscount)
console.log(finalPriceWithDiscount,"with Discount")
console.log(`you saved ${withoutDiscount-finalPriceWithDiscount} rupees`)
//output:
// 420 'without Discount'
// 378 'with Discount'
// you saved 42 rupees