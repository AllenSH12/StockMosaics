function sumValues(a,b,c,d) {
		var total = a + b + c + d;
		return total;
	}

	/*
	function SumDCF(freeCashFlows[]) {
		var TotSumDiscountedCashFlows = 0;
		//visit every freeCashFlow
		for (var i = 0; i< freeCashFlows.length; i++) {
			//compute DCF for each FCF
			var DCF = DCF(freeCashFlows[i], WACC, i+1);
			TotSumDiscountedCashFlows += DCF;
		}
		return TotSumDiscountedCashFlows;
	}
	*/

	function findPriceTarget(revenue, asset, capEx, rND) {


		//get all operating cash Flows
		var cashFromOperatingActivities = sumFCF(operatingCashFlows[]);
		//capEx should be an array??
		var capEx = 1;
		var freeCashFlow = cashFromOperatingActivities - capEx;

		var WACC = .115;
		var terminalGrowthRate = .003;
		var TermVal = (freeCashFlow * (1 + terminalGrowthRate)) / (WACC - terminalGrowthRate);

		//get years
		var DCF = freeCashFlow/Math.pow(1+WACC,years);

		//get cashEq and TotDebt
		var EV = TotSumDiscountedCashFlows + TermVal - CashEq + TotDebt;
		var priceTarget = EV / sharesOut;
		return priceTarget;
	}

	/*

	var totalUnitPrice = 0;
	$('.unitprice').each(function(index) {
	    totalUnitPrice += parseInt($(this).val());
	    // parse the value to an Integer (otherwise it'll be concatenated as string) or use parseFloat for decimals
	});

	function sumRows(array[]) {
		var totals = [];
		for (var i = 0; i < array.length; i ++) {
			for (var j = 0; j < array[i].length; j++) {
				totals[i] += array[i][j];
				alert(totals[i]);
			}
		}
		return totals[];
	}
	
	function totalRevenue(localAds[],brandAds[],otherServices[]) {
		var placeholder = [localAds[],brandAds[],otherServices[]];
		var totals[] = sumRows(placeholder);
		grossProfit(totals[], cogsInclDnA[]);
	}

	function grossProfit(totRev[],cogsInclDnA[]) {
		var grossProfits = [];
		for (var i = 0; i < totRev.length; i++) {
			//gross profit for year i equals total revenue for year i less COGS for year i
			grossProfits[i] = totRev[i] - cogsInclDnA[i];
		}
		EBIT(grossProfits[], RnD[], SnM[], OtherExp[]);
	}
	
	function EBIT(grossProfit[],RnD[],SnM[],OtherExp[])  {
		var EBIT = [];
		for (var i = 0; i < grossProfit.length; i++) {
			EBIT[i] = grossProfit[i] - RnD[i] - SnM[i] - OtherExp[i];
		}
		EBT(EBIT[],InterestFx[]);
	}
	
	function EBT(EBIT[],InterestFx[]) {
		var EBT = [];
		for (var i = 0; i < EBIT.length; i++) {
			EBT[i] = EBIT[i] - InterestFx[i];
		}
		return EBT;
	}

	function netIncome(EBT[], taxes[]) {
		var netIncome = [];
		for (var i=0; i<EBT.length; i++) {
			netIncome[i] = EBT[i] - taxes[i];
		}
		EBITDA(netIncome[],InterestFx[],taxes[],DnA[]);
	}
	
	function cashOpActivities(OpcashFlows[]) {
		var totalCashOpActivities = sumVar(OpcashFlows[]);
		return totalCashOpActivities;
	}
	
	function capEx() {
		var capEx = 1;
		return capEx;
	}
	
	function FreeCashFlow2013(cashOpActivities, CapEx) {
		var FreeCashFlow = cashOpActivities - CapEx;
		return FreeCashFlow;
	}
	
	function DCF(FreeCashFlow, WACC, Years) {
		var WACC = .115;
		var DCF = FreeCashFlow/(1+WACC)^years;
		return DCF;
	}
	
	function SumDCF(freeCashFlows[]) {
		var TotSumDiscountedCashFlows = 0;
		//visit every freeCashFlow
		for (var i = 0; i< freeCashFlows.length; i++) {
			//compute DCF for each FCF
			var DCF = DCF(freeCashFlows[i], WACC, i+1);
			TotSumDiscountedCashFlows += DCF;
		}
		return TotSumDiscountedCashFlows;
	}
	
	where should we get DCF2014 - DCF2020 from...
	
	function TermVal(FreeCashFlow20, WACC, termGrowthRate) {
		var TermVal = (FreeCashFlow20*(1+termGrowthRate))/(WACC - termGrowthRate);
		return TermVal;
	}
	
	function EV(TotSumDiscountedCashFlows,TermVal,CashEq,TotDebt) {
		var EV = TotSumDiscountedCashFlows + TermVal - CashEq + TotDebt;
		return EV;
	}
	
	function PriceTarget(EV,SharesOut) {
		var PriceTarget = EV/SharesOut;
		return PriceTarget;
	}			
	
	

	/////balance sheet
	
	
	function currentAssets(CashEq[],AcctsRec[],StInv[],MktSec[],Inv[],DefTaxAssets[],PrepaidExp[],AccExp[],otherCurrAssets[]) {
		var placeholder = [CashEq[],AcctsRec[],StInv[],MktSec[],Inv[],DefTaxAssets[],PrepaidExp[],AccExp[],otherCurrAssets[]];
		var currentAssets[] = sumRows(placeholder);
	}
	
	function longTermAssets(TangibleAssets[],BldsStructures[],MachineryEq[],FurnitureEq[],Land[],AccDep[],IntangAssets[],Software[],Goodwill[],OtherNetInt[],InvAndOtherAssets[],InvSec[],OtherRec[],OtherAssets[],DefTaxAssets[],LongTimeDeposit[],OtherLTAssets[],Allowance[]) {
		var placeholder = [TangibleAssets[],BldsStructures[],MachineryEq[],FurnitureEq[],Land[],AccDep[],IntangAssets[],Software[],Goodwill[],OtherNetInt[],InvAndOtherAssets[],InvSec[],OtherRec[],OtherAssets[],DefTaxAssets[],LongTimeDeposit[],OtherLTAssets[],Allowance[]];
		var longTermAssets[] = sumRows(placeholder);
	}
	
	function TotAssets(currentAssets,longTermAssets) {
		var TotAssets = currentAssets + longTermAssets;
		return TotAssets;
	}
	
	function CurrentLiabilities(StNP,StDebt,StBorrowing,CurrentInstLTDebt,BondsDue,AP,AccExp,ItaxPay,AllowProd,DivPay,OtherCurrLiab) {
		var CurrentLiabilities = StNP+StDebt+StBorrowing+CurrentInstLTDebt+BondsDue+AP+AccExp+ItaxPay+AllowProd+DivPay+OtherCurrLiab;
		return CurrentLiabilities;
	}
	
	function NonCurrentLiab(LtDebt,Bond,bondWarrant,LtBorrow,DefTaxLiab,ProvRiskCharge,RetirementSevBenef,OtherNonCurrLiab) {
		var NonCurrentLiab = LtDebt+Bond+bondWarrant+LtBorrow+DefTaxLiab+ProvRiskCharge+RetirementSevBenef+OtherNonCurrLiab;
		return NonCurrentLiab;
	}
	
	function TotLiab(CurrentLiabilities,NonCurrentLiab) {
		var TotLiab = CurrentLiabilities + NonCurrentLiab;
		return TotLiab;
	}
	
	function StockhldrsEq(RedeemablePrefStock,AddPic,RetainedEarnings,Tstock,CommonEq,AssetLiabDiffPlug,CumTranslAdj,UnrealizedGainLossMktSec) {
		{
		function AssetLiabDiffPlug(TotAssets,TotLiab,RedeemablePrefStock,AddPic,RetainedEarnings,Tstock,CommonEq,CumTranslAdj,UnrealizedGainLossMktSec) {
			var AssetLiabDiffPlug = TotAssets - TotLiab - RedeemablePrefStock - AddPic - RetainedEarnings - Tstock - CommonEq - CumTranslAdj - UnrealizedGainLossMktSec;
			return AssetLiabDiffPlug;
			}
		var StockhldrsEq = RedeemablePrefStock+AddPic+RetainedEarnings+Tstock+CommonEq+AssetLiabDiffPlug+CumTranslAdj+UnrealizedGainLossMktSec;
		return StockhldrsEq;
		}
	}

	/*function CashFlowInv("proceedsSaleTangAssets", "PurchaseIntAssets","ProceedsSaleIntAssets","PurchaseInvSec","ProceedsSalesRedempInvSec","PurchaseStocksSubAffil","ProceedsStocksSubAffil","PmtsLTloansRec","CollectionsLTLoansRec","DecSTLoansRec","ProceedsTransfBus","OtherNet","PmtsTimeDeposit","ProceedsTimeDep"); {
		var CashFlowInv = "proceedsSaleTangAssets"+"PurchaseIntAssets"+"ProceedsSaleIntAssets"+"PurchaseInvSec","ProceedsSalesRedempInvSec","PurchaseStocksSubAffil"+"ProceedsStocksSubAffil"+"PmtsLTloansRec"+"CollectionsLTLoansRec"+"DecSTLoansRec"+"ProceedsTransfBus"+"OtherNet"+"PmtsTimeDeposit"+"ProceedsTimeDep";
	}*/

	/*

	function cashInvActivities(InvcashFlows[]) {
		var totalCashInvActivities = sumVar(InvcashFlows[]);
		return totalCashInvActivities;
	}

	function cashFinActivities(FincashFlows[]) {
		var totalCashFinActivities = sumVar(FincashFlows[]);
		return totalCashFinActivities;
	}

	function netChangeCash(totalCashOpActivities,totalCashInvActivities,totalCashFinActivities) {
		var netChangeCash = totalCashOpActivities + totalCashInvActivities + totalCashFinActivities;
		return netChangeCash;
	}
	
	function EBITDA(netIncome[],InterestFx[],taxes[],DnA[]) {
		var EBITDA = [];
		for (var i = 0; i <netIncome.length; i++) {
			EBITDA[i] = netIncome[i] + InterestFx[i] + taxes[i] + DnA[i];
		}
		EBITDAtoEV(EBITDA[],EV[]);
	}
	
	function EBITDAtoEV(EBITDA[],EV[]) {
		var EBITDAtoEV = [];
		for (var i = 0; i <EBITDA.length; i++) {
			EBITDAtoEV[i] = EBITDA[i]/EV[i];
		}
		return EBITDAtoEV;
	}


	var localAds = [171.1,240.9,321.3,389,1412,425,438];
	var brandAds = [24.2,28.2,34.1,38.9,140.47156,41.28,42.1];
	var otherServices = [9.1,11.7,12,14,114.5656,14.85,15.15];
	var cogsInclDnA = [14,20,25,40,43,46,49,52];
	var RnD = [19.2,26.88,34.944,41.9328,46.13,50.74,55.8,61.39];
	var SnM = [0,0,0,0,0,0,0,0];
	var OtherExp = [114.832,160.7648,208.99,250.79,275.87,303.46,333.81,367.186];

	var CashEq = [116.100828,188.69892956,286.5468214012,395.236266661724,484.512406992283,551.619306778552,593.505306950212,606.793105225999];
	var AcctsRec = [3.599784,3.67177968,3.7452152736,3.820119579072,3.89652197065344,3.97445241006651,4.05394145826784,4.1350202874332];
	var StInv = [0,0,0,0,0,0,0,0];
	var MktSec = [0,0,0,0,0,0,0,0];
	var Inv = [0,0,0,0,0,0,0,0];
	var DefTaxAssets = [0,0,0,0,0,0,0,0];
	var PrepaidExp = [0.10404,0.1061208,0.108243216,0.11040808032,0.1126162419264,0.114868566764928,0.117165938100227,0.119509256862231];
	var AccRev = [0,0,0,,0,0,0,0];
	var otherCurrAssets = [0.124848,0.12734496,0.1298918592,0.132489696384,0.13513949031168,0.137842280117914,0.140599125720272,0.143411108234677];

	var TangibleAssets = [0.11,0.11,0.11,0.12,0.12,0.12,0.12,0.12];
	var AccDep = [0,0,0,0,0,0,0,0,];
	var Software = [0,0,0,0,0,0,0,0,];
	var Goodwill = [0,0,0,0,0,0,0,0,];
	var OtherNetInt = [0,0,0,0,0,0,0,0,];
	var InvAndOtherAssets = [0,0,0,0,0,0,0,0,];
	var DefTaxAssets = [0,0,0,0,0,0,0,0,];
	var OtherLTAssets = [0,0,0,0,0,0,0,0,];

	var StNP = [0,0,0,0,0,0,0,0,];
	var StDebt = [0,0,0,0,0,0,0,0,];
	var StBorrowing = [0,0,0,0,0,0,0,0,];
	var CurrentInstLTDebt = [0,0,0,0,0,0,0,0,];
	var BondsDue = [0,0,0,0,0,0,0,0,];
	var AP = [0.5,0.52,0.55,0.57,0.60,0.63,0.66,0.77,];
	var AccExp = [0.62,0.65,0.68,0.71,0.75,0.79,0.83,0.87,];
	var ItaxPay = [0,0,0,0,0,0,0,0,];
	var AllowProd = [0,0,0,0,0,0,0,0,];
	var DivPay = [0,0,0,0,0,0,0,0,];
	var OtherCurrLiab = [2.64,2.77,2.91,3.05,3.20,3.36,3.53,3.71];

	var LtDebt = [0,0,0,0,0,0,0,0,];
	var Bond = [0,0,0,0,0,0,0,0,];
	var LtBorrow = [0,0,0,0,0,0,0,0,];
	var DefTaxLiab = [0,0,0,0,0,0,0,0,];
	var ProvRiskCharge = [0,0,0,0,0,0,0,0,];
	var RetirementSevBenef = [0,0,0,0,0,0,0,0,];
	var OtherNonCurrLiab = [0.6,0.63,0.66,0.69,0.72,0.76,0.76,0.80,0.84];

	var RedeemablePrefStock = [0,0,0,0,0,0,0,0,];
	var AddPic = [148.7,151.7,154.7,157.8,161,164.2,167.5,170.9,];
	var RetainedEarnings = [49.3,123.6,224.5,336.7,428.6,497.1,539.2,551.3,];
	var Tstock = [0,0,0,0,0,0,0,0,];
	var CommonEq = [14.2,14.5,14.8,15.1,15.4,15.7,16,16.3,];
	var AssetLiabDiffPlug = [-96.5,-101.7,-108.2,-115.3,-121.5,-126.6,-130.6,-133.2,];
	var CumTranslAdj = [0,0,0,0,0,0,0,0,];
	var UnrealizedGainLossMktSec = [0,0,0,0,0,0,0,0,];

	var DnA=[0.276119402985075, 0.289473684210526, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var Dep=[0, 0, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var AmortInt=[0, 0, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var SGnAGrowthRate=[0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15];
	var RnDGrowthRate=[0.6, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1];
	var SGnAOtherGrowthRates=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var IntnFXGrowthRates=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var NonopIncomeExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var NonopIntIncome=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var OtherIncExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var IntExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var GrossIntExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var IntCapitalized=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var FixedAssetsImpariment=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var UnusualExpInc=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var FinAssetsImpairment=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var ReorgRestructureExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var GoodwillWriteOff=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var LegalClaimExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var UnrealizedInvLossGain=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
	var OtherUnusualExp=[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];

	var taxes=[1.02,1.04,1.061,1.0718,1.08254,1.09336,1.1043,1.11534];

	function findDifferences(a[]) {
		var differences = [];
		for (var i = 0; i < a.length; i++) {
			differences[i] = a[i-1] - a[i];
		}
		return differences;
	}

	function cashFromOperatingActivities(AcctsRec[], IncomeTaxesPayable[], prepaidExpenses[]) {
		var decreaseInNotesAndAccountsReceivable = findDifferences(AcctsRec[]);
		var changeInIncomeTaxes = findDifferences(IncomeTaxesPayable[]);
		var increaseInPrepaidRev = findDifferences(prepaidExpenses[]);
		var decreaseInv = findDifferences(Inv[]);
		var decreaseOtherCurrentAssets = findDifferences(otherCurrAssets[]);
		var increaseAP = findDifferences(AP[]);
		var incOtherLiab = findDifferences(OtherCurrLiab[]);
		var notesDiscounted = findDIfferences(notesDiscounted[]);
		var increaseAccruedExp = findDifferences(AccExp[]);
		var increaseAccruedRevShare = findDifferences(AccRev[]);
		var increaseDefRevShare = findDifferences(deferredRev[]);

	}

	function cashFromInvestingActivities() {
		var proceedsSaleTangAssets = findDifferences(proceedsSaleTangAssets[]);
		var PurchaseIntAssets = findDifferences(ProceedsSaleIntAssets[]);
		var ProceedsSaleIntAssets = findDifferences(ProceedsSaleIntAssets[]);
		var InvSec = findDifferences(InvSec[]);
		var salesRedemptInvSec = findDifferences(salesRedemptInvSec[]);
		var PurchaseStocksSubAffil = findDifferences(PurchaseStocksSubAffil[]);
		var proceedsLtNP = findDifferences(proceedsLtNP[]);
		var PmtsLTloansRec = findDifferences(PmtsLTloansRec[]);
		var CollectionsLTLoansRec = findDifferences(CollectionsLTLoansRec[]);
		var DecSTLoansRec = findDifferences(DecSTLoansRec[]);
		var ProceedsTransfBus = findDifferences(ProceedsTransfBus[]);
		var PmtsTimeDeposit = findDifferences(PmtsTimeDeposit[]);

	}

	function cashFromFinancingActivities() {
		var netIncreaseStLoansPayable = findDifferences(StDebt[]);
		var proceedsLtNP = findDifferences(PmtsLTloansRec[]);
		var repaymentLtNP = findDifferences(repaymentLtNP[]);
		var proceedsSaleTStock = findDifferences(proceedsSaleTStock[]);
		var repaymentsFinLeaseObl = findDifferences(repaymentsFinLeaseObl[]);
		var proceedsIssueBonds = findDifferences(proceedsIssueBonds[]);
		var proceedsStockOptions = findDifferences(proceedsStockOptions[]);
		var redemptionBonds = findDifferences(redemptionBonds[]);
		var EqRepurchases = findDifferences(EqRepurchases[]);
		var CashDivPaid = findDifferences(CashDivPaid[]);
		var proceedsfromStockIssuancetoMinoritySh = findDifferences(proceedsfromStockIssuancetoMinoritySh[]);

	}

	*/