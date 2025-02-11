import { Injectable, signal, } from "@angular/core";
import { IInvestmentInput, IInvestmentResult } from "../model/investment-input.model";

@Injectable({
    providedIn:'root'
})
export class InvestmentService{
   private resultData=signal<IInvestmentResult[]|undefined>(undefined)
     allData=this.resultData.asReadonly();
     

     calculateInvestmentResults(data:IInvestmentInput) {
        const {initialInvestment,annualInvestment,duration,expectedReturn} = data
        const annualData=[];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
        // this.resultData=annualData;
        this.resultData.set(annualData);
      }
      handleClearCalculation(){
          this.resultData.set([])
      }

}