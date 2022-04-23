function tipCalculator(amount){
    // Tip 10% if the amount is between 50 and 300
    if (50 <= amount && amount <= 300){
        var tip = amount * 0.1;
    }

    // Else tip 15%
    else{
        var tip = amount * 0.15;
    }

    console.log(`The bill was Rs. ${amount}, the tip was Rs. ${tip}, and the total is Rs. ${amount + tip}`);
}

tipCalculator(200);
tipCalculator(275);
tipCalculator(40);
tipCalculator(220);

/*
===Output===
The bill was Rs. 200, the tip was Rs. 20, and the total is Rs. 220
The bill was Rs. 275, the tip was Rs. 27.5, and the total is Rs. 302.5
The bill was Rs. 40, the tip was Rs. 4, and the total is Rs. 44
The bill was Rs. 220, the tip was Rs. 22, and the total is Rs. 242
*/