var cashFlows = [[ 56,73,98,109,89,67,42,13],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ -2.6,-4,-5,-5,-5,-5,-3,-2],
					[ 1, 1, 1, 1, 1, 1, 1, 1],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ -0.0705840000000002, -0.0719956800000001, -0.0734355936000002, -0.0749043054720002, -0.07640239158144, -0.0779304394130689, -0.0794890482013302,-.079],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ -0.00204, -0.00208080000000001, -0.002122416, -0.00216486432, -0.0022081616064, -0.002252324838528, -0.00229737133529856, -.00229],
					[ -0.00244800000000001, -0.00249696000000001, -0.00254689920000001, -0.002597837184, -0.00264979392768, -0.00270278980623359, -0.00275684560235828, -.0027],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ -0.1255, -0.131775, -0.13836375, -0.1452819375, -0.152546034375, -0.16017333609375, -0.168182002898438, -0.168],
					[ 0, 0, 0, 0, 0, 0, 0, 0],
					[ 0, 0, 0, 0, 0, 0, 0, 0]];

var localAds = [171.1,240.9,321.3,389, 401,412,425,438];
var brandAds = [24.2,28.2,34.1,38.9, 40.47,40,41.28,42.1];
var otherServices = [9.1,11.7,12,14, 14.56,14.85,15,15];
var cogsInclDnA = [14,20,25,40,43,46,49,52];
var rND = [19.2,26.88,34.944,41.9328,46.13,50.74,55.8,61.39];
var sNM = [0,0,0,0,0,0,0,0];
var otherExp = [114.832,160.7648,208.99,250.79,275.87,303.46,333.81,367.186];
var interestRate = [.05,.05,.05,.05,.05,.05,.05,.05];

var cashEq = [116.100828,188.69892956,286.5468214012,395.236266661724,484.512406992283,551.619306778552,593.505306950212,606.793105225999];
var acctsRec = [3.599784,3.67177968,3.7452152736,3.820119579072,3.89652197065344,3.97445241006651,4.05394145826784,4.1350202874332];
var stInv = [0,0,0,0,0,0,0,0];
var mktSec = [0,0,0,0,0,0,0,0];
var inv = [0,0,0,0,0,0,0,0];
var defTaxAssets = [0,0,0,0,0,0,0,0];
var prepaidExp = [0.10404,0.1061208,0.108243216,0.11040808032,0.1126162419264,0.114868566764928,0.117165938100227,0.119509256862231];
var accRev = [0,0,0,0,0,0,0,0];
var otherCurrAssets = [0.124848,0.12734496,0.1298918592,0.132489696384,0.13513949031168,0.137842280117914,0.140599125720272,0.143411108234677];

var tangibleAssets = [0.11,0.11,0.11,0.12,0.12,0.12,0.12,0.12];
var bldsStructures = [0,0,0,0,0,0,0,0];
var machineryEq = [0,0,0,0,0,0,0,0];
var furnitureEq = [0,0,0,0,0,0,0,0];
var land = [0,0,0,0,0,0,0,0];
var accDep = [0,0,0,0,0,0,0,0,];
var intangAssets = [0,0,0,0,0,0,0,0];
var software = [0,0,0,0,0,0,0,0,];
var goodwill = [0,0,0,0,0,0,0,0,];
var otherNetInt = [0,0,0,0,0,0,0,0,];
var invAndOtherAssets = [0,0,0,0,0,0,0,0,];
var invSec = [0,0,0,0,0,0,0,0];
var longTimeDeposit =[0,0,0,0,0,0,0,0];
var allowance = [0,0,0,0,0,0,0,0];
var otherRec = [0,0,0,0,0,0,0,0];
var otherLTAssets = [0,0,0,0,0,0,0,0];

var stNP = [0,0,0,0,0,0,0,0];
var stDebt = [0,0,0,0,0,0,0,0];
var stBorrowing = [0,0,0,0,0,0,0,0];
var currentInstLTDebt = [0,0,0,0,0,0,0,0];
var bondsDue = [0,0,0,0,0,0,0,0];
var aP = [0.5,0.52,0.55,0.57,0.60,0.63,0.66,0.77];
var accExp = [0.62,0.65,0.68,0.71,0.75,0.79,0.83,0.87];
var itaxPay = [0,0,0,0,0,0,0,0];
var allowProd = [0,0,0,0,0,0,0,0];
var divPay = [0,0,0,0,0,0,0,0];
var otherCurrLiab = [2.64,2.77,2.91,3.05,3.20,3.36,3.53,3.71];

var ltDebt = [0,0,0,0,0,0,0,0];
var bond = [0,0,0,0,0,0,0,0];
var bondWarrant = [0,0,0,0,0,0,0,0];

var ltBorrow = [0,0,0,0,0,0,0,0];
var defTaxLiab = [0,0,0,0,0,0,0,0];
var provRiskCharge = [0,0,0,0,0,0,0,0];
var retirementSevBenef = [0,0,0,0,0,0,0,0];
var otherNonCurrLiab = [0.6,0.63,0.66,0.69,0.72,0.76,0.76,0.80,0.84];

var redeemablePrefStock = [0,0,0,0,0,0,0,0];
var addPic = [148.7,151.7,154.7,157.8,161,164.2,167.5,170.9];
var retainedEarnings = [49.3,123.6,224.5,336.7,428.6,497.1,539.2,551.3];
var tStock = [0,0,0,0,0,0,0,0];
var commonEq = [14.2,14.5,14.8,15.1,15.4,15.7,16,16.3];
var assetLiabDiffPlug = [-96.5,-101.7,-108.2,-115.3,-121.5,-126.6,-130.6,-133.2];
var cumTranslAdj = [0,0,0,0,0,0,0,0];
var unrealizedGainLossMktSec = [0,0,0,0,0,0,0,0];

var dNA=[0.276119402985075, 0.289473684210526, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var dep=[0, 0, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var amortInt=[0, 0, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var sGnAGrowthRate=[0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15];
var rnDGrowthRate=[0.6, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1];
var sGnAOtherGrowthRates=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var intnFXGrowthRates=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var nonopIncomeExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var nonopIntIncome=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var otherIncExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var intExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var grossIntExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var intCapitalized=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var fixedAssetsImpariment=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var unusualExpInc=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var finAssetsImpairment=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var reorgRestructureExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var goodwillWriteOff=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var legalClaimExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var unrealizedInvLossGain=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
var otherUnusualExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];

var taxes=[1.02,1.04,1.061,1.0718,1.08254,1.09336,1.1043,1.11534];

var sharesOut = [34.2,34.61,35.03,35.45,35.87,36.30,36.74,37.18];

function findPriceTargets(a,b,c,d) {
	var years = 8;
	
	var revenues = [localAds, brandAds, otherServices];
	var grossProfit = sumColumnsOfArrays(revenues);
	for (var i=0; i<grossProfit.length; i++) {
		grossProfit[i] = (grossProfit[i] * (1+a))
	}
	var ebit = [];
	var interestFX = [];
	var ebt = [];
	var netIncome = [];
	var ebitda = [];

	for (var i = 0; i < years; i++) {
		ebit[i] = grossProfit[i] - (rND[i]*(1+b)) - sNM[i] - otherExp[i];
		interestFX[i] = ebit[i] * (-1*interestRate[i]);
		ebt[i] = ebit[i] - interestFX[i];
		netIncome[i] = ebt[i] - taxes[i];
		ebitda[i] = netIncome[i] + interestFX[i] + taxes[i] + dNA[i];
	}


	var currentAssets = sumColumnsOfArrays([cashEq,acctsRec,stInv,mktSec,inv,defTaxAssets,prepaidExp,accRev,otherCurrAssets]);
	var longTermAssets = sumColumnsOfArrays([tangibleAssets,bldsStructures,machineryEq,furnitureEq,land,accDep,intangAssets,software,goodwill,otherNetInt,invAndOtherAssets,invSec,otherRec,longTimeDeposit,otherLTAssets,allowance]);
	var totAssets = sumColumnsOfArrays ([currentAssets,longTermAssets]);
	for (var i=0; i<totAssets.length; i++) {
		totAssets[i] = totAssets[i] * (1 + c)
	}
	var currentLiabilities = sumColumnsOfArrays([stNP,stDebt,stBorrowing,currentInstLTDebt,bondsDue,aP,accExp,itaxPay,allowProd,divPay,otherCurrLiab]);
	var nonCurrentLiab = sumColumnsOfArrays([ltDebt,bond,bondWarrant,ltBorrow,defTaxLiab,provRiskCharge,retirementSevBenef,otherNonCurrLiab]);
	var totLiab = sumColumnsOfArrays([currentLiabilities, nonCurrentLiab]);
	var stockhldrsEq = sumColumnsOfArrays([redeemablePrefStock,addPic,retainedEarnings,tStock,commonEq,assetLiabDiffPlug,cumTranslAdj,unrealizedGainLossMktSec]);
	
	var totalCashInvActivities = [0,0,0,0,0,0,0,0];
	var totalCashFinActivities = [0,0,0,0,0,0,0,0];

	var cashFromOperatingActivities = sumColumnsOfArrays(cashFlows);

	var capEx = []
	capEx = fillArray(capEx, 1*(1+d), years)
	
	var freeCashFlow = findDifferences(cashFromOperatingActivities,capEx);

	var wacc = .115;
	var terminalGrowthRate = .003;
	var netChangeCash = [];
	var termVal = [];
	var dcf = [];

	for (var i = 0; i < years; i++) {
		netChangeCash[i] = cashFromOperatingActivities[i] + totalCashInvActivities[i] + totalCashFinActivities[i];
		termVal[i] = (freeCashFlow[i] * (1 + terminalGrowthRate)) / (wacc - terminalGrowthRate);
		dcf[i] = freeCashFlow[i]/Math.pow(1+wacc,i);
	}
	
	var totalSumOfDiscountedCashFlows = findSumOfArray(dcf);

	//get cashEq and totalDebt
	var ev = [];
	var priceTarget = [];

	for (var i = 0; i < dcf.length; i++) {
		ev[i] = dcf[i] + termVal[i];
		priceTarget[i] = ev[i] / sharesOut[i];
	}
	return priceTarget;
}

//////////////////////////// NON FINANCIAL HELPER FUNCTIONS ///////////////////////					
function sumValues(a,b,c,d) {
	var total = a + b + c + d;
	return total;
}

function sumColumnsOfArrays(array) {
		var total = [];
		for (var i=0; i < array[0].length; i++) {
			total[i] = 0;
		}
		for (var i=0; i < array.length; i++) {
			for (var j=0; j < array[0].length; j++) {
				total[j] += array[i][j];
			}
		}
		return total;
	}

function fillArray(array, value, positions) {
	//blank array
	array = [];
	for (var i = 0; i < positions; i++) {
		array[i] = value;
	}
	return array;
}

function findDifferences(arrayOne, arrayTwo) {
	var diffs = [];
	for (var i = 0; i < arrayOne.length; i++) {
		diffs[i] = arrayOne[i] - arrayTwo[i];
	}
	return diffs;
}

function findSumOfArray(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

function adjustData(data,float) {
	for (var i=0; i<data.length; i++) {
		data[i] = data[i] * (1+float);
	}
}
/////////////////////////END NON FINANCIAL HELPER FUNCTIONS ///////////////////////