//Budget Calculation
function budgetCalculator(ghori,phone,laptop){
    var ghori = ghori*50;
    var phone = phone*100;
    var laptop = laptop*500;

    total = ghori+phone+laptop;

    return total;
}

//Kilometer to Meter 
function kilometerToMeter(kiloMeter){
    var meter = kiloMeter*1000;
    return meter;
}


//Hotel Cost 
function hotelCost(day){
    if(day<=10){
        var finalRent = day*100;
    }
    else if(day<=20){
        var firstPeriod = 10*100;
        var remaining = day-10;
        var secondPeriod = remaining*80;
        finalRent = firstPeriod + secondPeriod;
    }
    else{
        var firstPeriod = 10*100;
        var secondPeriod = 10*80;
        var remaining = day-20;
        var thirdPeriod = remaining*50;
        finalRent = firstPeriod+secondPeriod+thirdPeriod;
    }
    return finalRent;
}


//Longest Name
function megaFriend(name){
    var max = name[0];
    for(var i=0; i<name.length; i++){
        var element = name[i];
        if(element>max){
            max = element;
        }
    }
    return max;

}

