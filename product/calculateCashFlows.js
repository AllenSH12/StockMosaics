function SumFCF(operatingCashFlows[]) {
	var cashProvidedFromOperatingActivities = [];
	return operatingCashFlows.forEach(addRowToTotal);
}

function addRowToTotal(row[]) {
	var total = [];
	row.forEach(function(total[index] += row[index]));
	return total;
}