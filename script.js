function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var amount = principal +interest;
    var result = document.getElementById("result");
    var year= new Date().getFullYear() + years;
    if (principal < 0)
    {
        alert("Enter positive number");
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML = "If you/ deposit $<mark>" + principal + "</mark></br>at an interest rate of " + rate + 
        "</br>you will recieve an amount of $" + amount + "</br> in the year " + year + "</br></br>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}