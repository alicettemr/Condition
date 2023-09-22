let a =4;
let b=4;
let c=3;

switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}


//2
let aT=3;
while(a<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");