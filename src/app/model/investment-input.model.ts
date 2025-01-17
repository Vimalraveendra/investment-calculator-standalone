export interface IInvestmentInput{
    initialInvestment:number,
    annualInvestment:number,
    expectedReturn:number,
    duration:number
}

export interface IInvestmentResult{
    year:number,
    interest:number,
    annualInvestment:number,
    valueEndOfYear:number,
    totalInterest: number,
    totalAmountInvested:number
}