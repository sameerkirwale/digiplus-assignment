let nodeTypeEle = document.getElementById ("node-type");

let displayOutput =()=> {
    let htmlDisplayBtn = ''
    htmlDisplayBtn += `<button onclick="displayNode()" id="display-node-type" class="css-input-btn"> ${nodeTypeEle.value} </button>`;
        
    displayOutputEle.innerHTML = htmlDisplayBtn;
    
    console.log (nodeTypeEle.value);
}

let add =()=> {
    displayOutput();
}

let displayOutputEle = document.getElementById ("js-display-output");

let displaySelectedNodeEle = document.getElementById ("display-selected-node");
let displayNodeType = document.getElementById ("display-node-type");

let displayNode =()=> {
    displaySelectedNodeEle.value = displayNodeType.Text ;
}



