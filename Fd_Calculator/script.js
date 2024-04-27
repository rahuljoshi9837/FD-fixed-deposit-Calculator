function calculateMaturityAmount(){
    const principle = parseFloat(document.querySelector("#principle").value);
    const interestRate = parseFloat(document.querySelector("#interestRate").value);
    const tenure = parseFloat(document.querySelector("#tenure").value);
    // ------ Validations ------ //
    if(isNaN(principle) || isNaN(interestRate) || isNaN(tenure)){
        if( (isNaN(principle) && (!isNaN(interestRate) && !isNaN(tenure))) ||  isNaN(principle) ){
            alert("The Principle value can not be null");
            return false;
        }

        if( (isNaN(interestRate) && (!isNaN(principle) && !isNaN(tenure))) ||  isNaN(interestRate)){
            alert("The interest Rate value can not be null");
            return false;
        }

        if( (isNaN(tenure) && (!isNaN(principle) && !isNaN(interestRate))) ||  isNaN(tenure)){
            alert("The interest Rate value can not be null");
            return false;
        }
    }

    // ----- Calculate maturity ----- //
    const maturityAmt = principle + (principle * interestRate * tenure) / 100;

    const result = document.querySelector("#result");
    result.innerHTML = `Maturity Amount : ${maturityAmt.toFixed(2)}`;
}

document.querySelector("#calculateBtn").addEventListener("click", calculateMaturityAmount);