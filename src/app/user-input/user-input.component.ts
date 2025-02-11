import { Component,inject,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../service/investment-service';
import { FormInputComponent } from "../shared/form-input/form-input.component";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, FormInputComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentService=inject(InvestmentService)
  initialInvestment=signal('0');
  annualInvestment=signal('0');
  expectedReturn=signal('5');
  duration=signal('10');

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.initialInvestment(),
      annualInvestment:+this.annualInvestment(),
      expectedReturn:+this.expectedReturn(),
      duration:+this.duration()

    })
    this.initialInvestment.set('0'),
    this.annualInvestment.set('0'),
    this.expectedReturn.set('5'),
    this.duration.set('10')
  }

  clearCalculation(){
     this.investmentService.handleClearCalculation()
  }
  }

