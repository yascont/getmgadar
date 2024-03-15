import { Component, Input } from '@angular/core';

@Component({
  selector: 'mg-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent {
  @Input() type: any;
  @Input() price: any;

}
