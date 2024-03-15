import { Component } from '@angular/core';

@Component({
  selector: 'mg-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  mo: any[] = [
    { name: 'boxing', time: '9:00am - 10:00am', tainer: 'Robert Louis' },
    { name: 'yoga', time: '11:00am - 12:00pm', tainer: 'Ana June' },
    { name: 'crossfit', time: '6:00pm - 7:00pm ', tainer: 'enifer Alex' },
  ];
  tu: any[] = [
    { name: 'boxing', time: '9:00am - 10:00am', tainer: 'Dorian Yates' },
    { name: 'Body Building', time: '11:00am - 12:00pm', tainer: 'Steven Mark' },
    { name: 'Cycling', time: '6:00pm - 7:00pm ', tainer: 'enifer Alex' },
    { name: 'Running', time: '4:00pm - 5:00pm', tainer: 'Robert Louis' },
  ];
  we: any[] = [
    { name: 'Body Building', time: '11:00am - 12:00pm', tainer: 'Steven Mark' },
    { name: 'yoga', time: '11:00am - 12:00pm', tainer: 'Ana June' },
    { name: 'crossfit', time: '6:00pm - 7:00pm ', tainer: 'enifer Alex' },
  ];
  th: any[] = [
    { name: 'boxing', time: '9:00am - 10:00am', tainer: 'Robert Louis' },
    { name: 'crossfit', time: '6:00pm - 7:00pm ', tainer: 'enifer Alex' },
  ];
  fr: any[] = [
    { name: 'boxing', time: '9:00am - 10:00am', tainer: 'Robert Louis' },
  ];
  sa: any[] = [
    { name: 'boxing', time: '9:00am - 10:00am', tainer: 'Robert Louis' },
    { name: 'yoga', time: '11:00am - 12:00pm', tainer: 'Ana June' },
    { name: 'crossfit', time: '6:00pm - 7:00pm ', tainer: 'enifer Alex' },
  ];
  su: any[] = [
    { name: 'yoga', time: '11:00am - 12:00pm', tainer: 'Ana June' },
    { name: 'crossfit', time: '6:00pm - 7:00pm ', tainer: 'enifer Alex' },
  ];

  schedule:any[] = this.mo

  handleItemClick(number: number) {
    if (number == 1)
      this.schedule = this.mo
      if (number == 2)
      this.schedule = this.tu
      if (number == 3)
      this.schedule = this.we
      if (number == 4)
      this.schedule = this.th
      if (number == 5)
      this.schedule = this.fr
      if (number == 6)
      this.schedule = this.sa
      if (number == 7)
      this.schedule = this.su

  }
}
