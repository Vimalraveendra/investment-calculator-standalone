import { Component,computed,inject, OnInit } from '@angular/core';
import { InvestmentService } from '../service/investment-service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent  implements OnInit{
  private investmentService=inject(InvestmentService)
  resultData=computed(()=>this.investmentService.allData())

  ngOnInit(): void {
      console.log("reuslt",this.resultData())
  }

}
