	function findPriceTarget(valueOne, valueTwo) {
		var priceTarget = valueOne / valueTwo;
		return priceTarget;
	}

	function findEV(TotSumDiscountedCashFlows,TermVal,CashEq,TotDebt) {
		var EV = TotSumDiscountedCashFlows + TermVal - CashEq + TotDebt;
		return EV;
	}