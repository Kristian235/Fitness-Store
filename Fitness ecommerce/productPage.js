//let products = document.getElementsByClassName("card");
let cardInfo = document.getElementById("card-bar");
let buttons = document.getElementsByClassName("view");
//let cartP = document.getElementById("cart-p");
let manSort = document.getElementById("man");
let buttonsArray = Array.from(buttons);
//let pMan = document.querySelector("#man");
let cart = document.querySelector(".cart-image");
let sum = 0;
let numToAbstract = 0; 
let sumP = document.getElementById("sum");
let regex = /[0-9]/g;
let button = document.createElement("button");
let itemsArr = [];


buttonsArray.forEach((x) => x.addEventListener("click", addToCard));

function addToCard(e){
    cart.click();

    //Buy button
    button.textContent = "Buy";
    button.style.width = "120px";
    button.style.height = "50px";
    button.style.padding = "1rem";
    button.style.border = "none";
    button.style.backgroundColor = "#C12026";
    button.style.color = "white";
    button.style.cursor = "pointer";

    let productsDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let element = e.target;    
    let price = element.previousElementSibling;
    let div = element.parentElement.parentElement;

    let img = div.children[0];
    let info = div.children[1];
    let infoText = info.textContent;
    let priceText = price.textContent;
    let found = priceText.match(regex);
    console.log(found);
    
    let priceSum = found.join("");
    let numToAdd = Number(priceSum);
    
    img.width = 200;
    img.height = 200;

    //prepare product
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    //li.appendChild(imgLink);
    imgDiv.append(img.cloneNode(true));
    li.append(infoText);
    li2.append(priceText);
    li2.marginBottom = "2rem";

    sum += numToAdd;
    li3.append(sum);
    
    imgDiv.style.marginTop = "2rem";

    li.style.marginTop = "1rem";
    li.style.color = "white";

    li2.style.marginTop = "-1rem";
    li2.style.color = "white";

    //Sum
    sumP.textContent = `Total sum: ${sum}$`;
    sumP.style.marginTop = "3rem";
    sumP.style.paddingBottom = "3rem";
    sumP.style.fontWeight = "bold";
    sumP.style.fontSize = "1.2em";
    sumP.style.color = "white";

    //buttons for adding more or less
    let more = document.createElement("button");
    more.style.width = "20px";
    more.style.height = "20px";
    more.style.border = "none";
    more.textContent = "+";
    more.style.backgroundColor = "#C12026";
    more.style.color = "white";

    let counterP = document.createElement("p");
    let productCount = 1;
    counterP.textContent = productCount;
    counterP.style.color = "white";

    //create less button
    let less = document.createElement("button");
    less.style.width = "20px";
    less.style.height = "20px";
    less.style.border = "none";
    less.textContent = "-";
    less.style.backgroundColor = "#C12026";
    less.style.color = "white";

    let addPLess = document.createElement("li");
    addPLess.appendChild(more);
    addPLess.appendChild(counterP);
    addPLess.appendChild(less);
    addPLess.style.marginTop = "-1rem";
    addPLess.style.display = "flex";
    addPLess.style.justifyContent = "center";
    addPLess.style.gap = "10px";

    more.addEventListener("click", addMore);

    function addMore(e){
        let element = e.target;
        let parent = element.parentElement.parentElement;
        let price2 = parent.children[2];
        let priceText2 = price2.textContent;
        let found2 = priceText2.match(regex);
        let priceSum2 = found2.join("");
        let numToAdd2 = Number(priceSum2);     
        
        productCount++;
        counterP.textContent = productCount;
        sum += numToAdd2;
        sumP.textContent = `Total sum: ${sum}$`;
    }

    less.addEventListener("click", oneLess);

    function oneLess(e){
        if(productCount <= 1){
            return;
        }

        let element = e.target;
        let parent = element.parentElement.parentElement;
        let price3 = parent.children[2];
        let priceText3 = price3.textContent;
        let found3 = priceText3.match(regex);
        let priceSum3 = found3.join("");
        let numToAdd3 = Number(priceSum3);   
        
        productCount--;
        counterP.textContent = productCount;
        sum -= numToAdd3;
        sumP.textContent = `Total sum: ${sum}$`;
    }

    //remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeBtn.style.width = "100px";
    removeBtn.style.hieght = "70px";
    removeBtn.style.border = "none";
    removeBtn.style.fontSize = "1.3em";
    removeBtn.style.backgroundColor = "#C12026";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.color = "white";
    removeBtn.style.marginTop = "-1rem";

    removeBtn.addEventListener("click", removeItem);

    function removeItem(e){
        //cartPNum--;
        //cartP.textContent = cartPNum;
        itemsArr.shift(productsDiv);  
        let element = e.target;
        let divParent = element.parentElement;
        let parent = element.parentElement;
        let price4 = parent.children[2];     
        let priceText4 = price4.textContent;       
        let found4 = priceText4.match(regex);
        let priceSum4 = found4.join("");
        let numToAdd4 = Number(priceSum4);    
        
        sum -= numToAdd4 * (productCount);
            
        sumP.textContent = `Total sum: ${sum}$`;
        sumP.style.background = "none";
        divParent.remove();

        if(sum === 0){
            sumP.textContent = "";
        }

        if(itemsArr.length === 0){
            button.remove();
        }
    }
    

    productsDiv.appendChild(imgDiv);
    productsDiv.appendChild(li);
    productsDiv.appendChild(li2);
    productsDiv.appendChild(addPLess);
    productsDiv.appendChild(removeBtn);

    itemsArr.push(productsDiv);  

    cardInfo.appendChild(productsDiv);  
    cardInfo.appendChild(sumP);
    cardInfo.appendChild(button);
}
