console.log(varVariable);

let globalVariable1 = 12;

let globalVariable2 = function () {
    console.log("inside the function " , globalVariable1);

    let funVariable1 = "hello"

    let funVariable2 = function () {
        console.log("funVariable2 belseje");
        console.log(globalVariable1);
        console.log(funVariable1);

        let funInFunVariable1 = true;
            console.log(funInFunVariable1)

        let funInFunVariable2 = function (){
            console.log(funInFunVariable1)
        }
        funInFunVariable2()

    }
    funVariable2();

    console.log(funVariable1);

    if(funVariable1 === "hello"){
        var blockVariable1 = "Bye"
    } else {
        //console.log(blockVariable1); itt sem működik
    }

        console.log(blockVariable1);
        /* ha lettel írom a let(blockVariable1)-et akkor nem ír ki semmit a console log. viszont ha varral írom, akkor kiírje a Bye értékét */

}


//itt hívom meg a globalVariable2 függvényt
globalVariable2()

//console.log(funVariable1); ezt azért kommenteztük ki, mert itt nem működik


var varVariable = 1;


let letVariable1;
console.log(letVariable1)

let letVariable2;
console.log(letVariable2)


const constVariable = "ciao";
//constVariable = "Hello";
console.log(constVariable)

const constObj1 = {};
constObj1.key = "value"; // az a különbség, hogy hova mutat. nem új értéket adok neki, hanem rámutatok, hogy töltsd fel azt értékekkel

//constObj1 = {key: "value"} // itt megint létrejött egy új objektum 

console.log(constObj1)


const globalVariable3 = function(parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3());
}

const globalVariable4 = "apple";

const globalVariable5 = function (){
    return "pear"
}

const globalVariable6 = function (){
    return "shoes"
}



globalVariable3(globalVariable5(), globalVariable4, globalVariable6)


let loadEvent = function (parameter1) { 
    let rootElement = document.getElementById("root")
    console.log(rootElement)
    console.log(parameter1)
    //console.log(globalVariable1);

    rootElement.addEventListener("click", function (event) {
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "Clicked")
        event.currentTarget.classList.toggle("clicked")
    })

}

window.addEventListener('load', loadEvent);