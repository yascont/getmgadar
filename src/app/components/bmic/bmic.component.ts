import { Component } from '@angular/core';

@Component({
  selector: 'mg-bmic',
  templateUrl: './bmic.component.html',
  styleUrls: ['./bmic.component.scss']
})
export class BMICComponent {
  weight = undefined
  height = undefined
  bmi = -1
  status = 'dead'
  calculate() {
    if (this.weight !== undefined && this.height !== undefined) {
      this.bmi = this.weight / (this.height / 100 * this.height / 100);
      this.status = (() => {
        if (this.bmi < 18.5)
          return "Underweight";
        else if (this.bmi >= 18.5 && this.bmi <= 24.9)
          return "Normal weight";
        else if (this.bmi >= 25 && this.bmi <= 29.9)
          return "Overweight";
        return "Obese";
      })()
    }
  }
}
