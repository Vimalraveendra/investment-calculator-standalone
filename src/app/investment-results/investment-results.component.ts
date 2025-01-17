import { Component,computed,inject, OnInit } from '@angular/core';
import { InvestmentService } from '../service/investment-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService=inject(InvestmentService)
  resultData=computed(()=>this.investmentService.allData())

}
