import { Component } from '@angular/core';

@Component({
  selector: 'mg-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  billingCycle = "Yearly"
  currentBasicPrice = 100
  currentPremiumPrice = 200
  onChange() {
    this.currentBasicPrice = this.currentBasicPrice == 100 ? 250 : 100
    this.currentPremiumPrice = this.currentPremiumPrice == 200 ? 350 : 200
  }
}
