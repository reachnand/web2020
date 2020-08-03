function calcAddValue(){
    let result = 0;
    let val1 = document.getElementById("inlineFormInputName1").value;
    let val2 = document.getElementById("inlineFormInputName2").value;

    result = Number(val1) + Number(val2);
    document.getElementById("inlineFormInputName3").value = result;
}

function calcSubValue(){
    let result = 0;
    let val1 = document.getElementById("inlineFormInputName1").value;
    let val2 = document.getElementById("inlineFormInputName2").value;

    result = Number(val1) - Number(val2);
    document.getElementById("inlineFormInputName3").value = result;
}

function calcMultiplyValue(){
    let result = 0;
    let val1 = document.getElementById("inlineFormInputName1").value;
    let val2 = document.getElementById("inlineFormInputName2").value;

    result = Number(val1) * Number(val2);
    document.getElementById("inlineFormInputName3").value = result;
}

function calcDivValue(){
    let result = 0;
    let val1 = document.getElementById("inlineFormInputName1").value;
    let val2 = document.getElementById("inlineFormInputName2").value;

    result = Number(val1) / Number(val2);
    document.getElementById("inlineFormInputName3").value = result;
}

function reset(){

    document.getElementById("inlineFormInputName1").value = "";
    document.getElementById("inlineFormInputName2").value = "";
}