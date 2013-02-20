function sumVariables(a,b,c,d) {
	var total = a + b + c + d;
	return total;
}

function findPriceTarget(valueOne, valueTwo) {
	var priceTarget = valueOne / valueTwo;
	return priceTarget;
}

function findEV(TotSumDiscountedCashFlows,TermVal,CashEq,TotDebt) {
	var EV = TotSumDiscountedCashFlows + TermVal - CashEq + TotDebt;
	return EV;
}