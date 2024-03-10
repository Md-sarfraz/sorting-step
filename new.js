const arrayInput = document.querySelector("#array-input");
const sortBtn = document.querySelector("#sort-btn");
const outputPara = document.querySelector('.output-p');
const InnerContainer = document.querySelector('.inner-container');

let arr = [];
let click = true;

const outerBox = (index) => {
    const outerBoxDiv = document.createElement("div");
    outerBoxDiv.classList.add("outer-box");
    outerBoxDiv.id = `step${index}`;
    InnerContainer.appendChild(outerBoxDiv);
}

const updateStep = (stepIndex, arr) => {
    const outerBoxId = document.querySelector(`#step${stepIndex}`);
    let arrayBox = '';
    for (let i = 0; i < arr.length; i++) {
        arrayBox += `<div class='array-box'>${arr[i]}</div>`;
    }
    var divpass= document.createElement('div');
    divpass.innerHTML=arrayBox;
    outerBoxId.appendChild(divpass);
}

if (click) {
    sortBtn.addEventListener("click", () => {
        arr = arrayInput.value.split(",").map(num => parseInt(num.trim()));
        for (let i = 0; i < arr.length; i++) {
            outerBox(i);
        }

        const SortArray = () => {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        const temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        
                    }
                    updateStep(i, arr);
                }
            }
        }
        SortArray();

        const finalOutput = arr.join(', ');
        outputPara.textContent = finalOutput;
    });
}
