//.How Edabit Works
function hello() {
	return "hello edabit.com";
}
// .Area of a Triangle
function triArea(base, height) {
	return (base * height) /2;
}
//.Return the Sum of Two Numbers
function addition(num1, num2) {
	var sum = num1 + num2
	return sum;
	//return num1 + num2;
}
// .Return the Next Number from the Integer Passed
function addition(num) {
	// return ++num;
	return num+1;
}
// .Convert Age to Days
function calcAge(age) {
	return age * 365
}
// .Power Calculator
function circuitPower(voltage, current) {
	return voltage * current;
}
// .Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y;
}
// .Maximum Edge of a Triangle
function nextEdge(side1, side2) {
    var side3 =	(side1 + side2) -1;
        return side3;
    }
    // .Convert Hours into Seconds
    function howManySeconds(hours) {
        return hours*3600;
    }
    // .Correct the Mistakes
    function squared(b) {
        return b * b ;
    }
    // .Convert Minutes into Seconds
    function convert(minutes) {
        return minutes*60;
    }
    // .Less Than 100?
    function lessThan100(a, b) {
        if(a+b<100)
            return true;
        else
            return false
    }
    // .Return Something to Me!
    function giveMeSomething(a) {
        return "something "+a;
    }
    // .Find the Perimeter of a Rectangle
    function findPerimeter(l, w) {
        return 2*(l+w);
    }
    // .Is the Number Less than or Equal to Zero?
    function lessThanOrEqualToZero(num) {
        if (num<=0)
            return true;
        else
            return false;
    }
    // .Profitable Gamble
    function profitableGamble(prob, prize, pay) {
        if(prob * prize > pay)
            return true
        else
            return false
    }
    // .Are the Numbers Equal?
    function isSameNum(num1, num2) {
        if(num1===num2)
            return true;
        else
            return false;
    }
    // .Convert Hours and Minutes into Seconds
    function convert(hours, minutes) {
        return hours*3600 + minutes*60
    }
