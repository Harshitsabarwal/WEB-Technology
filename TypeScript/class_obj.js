class a{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log(`Name: ${this.name}`);
    }
}
const a1= new a("Harshit");
console.log(a1.name);
console.log(a1.display());
function display(){
    console.log("Hello World");
    console.log("Hello World2");
}
console.log(display());