const dropList = document.querySelectorAll('.drop-list select');
const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const getButton = document.querySelector('form button')
for(let i =0;i<dropList.length;i++){
    for(currency_code in country_code){
        let selected;
        if(i == 0 ){
            selected = currency_code === "USD" ? "selected" : "";

        }
        else if(i == 1){
            selected = currency_code === "NPR" ? "selected" : "";
        }
        //createing option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside selected tag
        dropList[i].insertAdjacentHTML("beforeend",optionTag);
    }
    dropList[i].addEventListener('change',function(event){
        loadFlag(event.target);
    })
}
function loadFlag(element){
    for(let code in country_code){
        if(code == element.value){
            let imgTag=element.parentElement.querySelector('img');
            imgTag.src= `https://flagsapi.com/${country_code[code]}/flat/64.png`
        }
    }
        
}
window.addEventListener('load',function(){
    getExchangeRate();
})
getButton.addEventListener('click',function(e){
    e.preventDefault();
    getExchangeRate();
})
const excangeIcon = document.querySelector('.drop-list .icon');
excangeIcon.addEventListener('click',function(){
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency)
    getExchangeRate();
})
function getExchangeRate(){
    const amount = document.querySelector('.amount input');
    const exchangeRateTxt = document.querySelector('.exchange-rate');
    let amountVal = amount.value;
    if(amountVal == "" || amountVal =="0"){
        amount.value = 1;
        amountVal = 1;
    }
    exchangeRateTxt.innerText="Loading...";
    let url = 'https://v6.exchangerate-api.com/v6/89e292d390e513d2b7001995/latest/USD';
    fetch(url).then(response => response.json()).then(result =>{
        let fromRate = result.conversion_rates[fromCurrency.value];
        let toRate = result.conversion_rates[toCurrency.value];
        let exchangeRate = toRate / fromRate; 
let totalExchangeRate = (amountVal * exchangeRate).toFixed(5);
exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
}).catch(function(error){
    console.error('Error fetching exchange rate:', error);
    exchangeRateTxt.innerText="Failed to fetch exchange rate"
})
}