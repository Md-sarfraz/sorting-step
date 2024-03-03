const arrayInput=document.querySelector("#array-input");
const sortBtn=document.querySelector("#sort-btn");
const outputBox=document.querySelector(".output-Box");
const outputPara=document.querySelector('.output-p');
const container=document.querySelector(".container")
// const newP=document.createElement("p");
const div=document.createElement("div");
var arr=[];
console.log(arrayInput.value);
sortBtn.addEventListener("click",()=>{
    arr=arrayInput.value.split(",")
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
    console.log(arr);
    const SortArray=arr.sort()
    finalOutput=SortArray.map(String);
    var a=''
    for(var i=0;i<finalOutput.length;i++){
        a=a+finalOutput[i];
        if(i!=finalOutput.length-1){
            a=a+',';
        }

    }
    outputPara.innerHTML=a;
    console.log(finalOutput)
    console.log(a)
})


// container.innerHTML=div;
// div.classList.add("step-by-step");

