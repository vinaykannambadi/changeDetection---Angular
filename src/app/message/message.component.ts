import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  @Input() person: Observable<any>;
  data$;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.person.subscribe(data => {
      this.data$ = data;
      this.cd.markForCheck();
    });

  }

}
