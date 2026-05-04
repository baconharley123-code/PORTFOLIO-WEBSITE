function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById("sum").innerHTML = "Please enter valid numbers.";
            return; // Exit the function if inputs are invalid.
    }
        const sum = num1 + num2;
    document.getElementById("sum").innerHTML= "The sum is: " + sum.toFixed(2);

        const difference = num1 - num2;
    document.getElementById("difference").innerHTML= "The difference is: " + difference.toFixed(2);

        const product = num1 * num2;
    document.getElementById("product").innerHTML= "The product is: " + product.toFixed(2);

        const quotient = num1 / num2;
    document.getElementById("quotient").innerHTML= "The quotient is: " + quotient.toFixed(2);

        const remainder = num1 % num2;
    document.getElementById("remainder").innerHTML= "The remainder is: " + remainder.toFixed(2);
}

    function clearFields() {
    document.getElementById("sum").innerHTML = " ";
    document.getElementById("difference").innerHTML = " ";
    document.getElementById("product").innerHTML = " ";
    document.getElementById("quotient").innerHTML = " ";
    document.getElementById("remainder").innerHTML = " ";
}

