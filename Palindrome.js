let i=0
let g=0
function pal(num){

let len=num.length
console.log(len)
for(i=0; i<len/2;i++){
    if(num[i]!=num[len-i-1]){
        console.log("No");
        return;
    }
    
}

    console.log("Palindrome")}
    let num=prompt("Enter a number")
    let p=pal(num)
console.log(num)
console.log(p)
// ALternate Method
// let n=prompt("Input")
// let b=""
// n=n.toLowerCase()
// n=n.replace(" ","*")
// l=n.length
// for(let i=0;i<l;i++){
//     b+=n[l-i-1]
// }
// console.log(b)
// if(b==n){
//     alert("Palindome")
// }
// else{
//     alert("Not palindrome")
// }
