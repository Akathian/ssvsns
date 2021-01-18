import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.anim', style({ opacity: 0, })),
        query('.anim', stagger('0ms', [
          animate('1000ms ease-out', style({ opacity: 1, })),
        ]))
      ])
    ])
  ]
})
export class ComingSoonComponent implements OnInit {
  countDownDate = new Date('Feb 28, 2021 00:00:00').getTime();
  constructor() { }

  ngOnInit() {
    const self = this;
    setInterval(function () {
      const now = new Date().getTime();
      const timeleft = self.countDownDate - now;
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = self.toDoubleDigit(days)
      document.getElementById('hours').innerHTML = self.toDoubleDigit(hours)
      document.getElementById('mins').innerHTML = self.toDoubleDigit(minutes)
      document.getElementById('secs').innerHTML = self.toDoubleDigit(seconds)
    }, 1000);
  }
  toDoubleDigit(num) {
    let ret = `${num}`
    if (ret.length === 1) {
      ret = '0' + ret
    }
    return `<span class='mx-auto'>${ret}</span>`
  }
}