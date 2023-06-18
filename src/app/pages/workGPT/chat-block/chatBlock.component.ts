import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, interval, map, mergeMap, Observable, timer} from "rxjs";
import {CodeModel} from "@ngstack/code-editor";

@Component({
  selector: 'app-chat-block',
  templateUrl: './chatBlock.component.html',
  styleUrls: ['./chatBlock.component.scss']
})
export class ChatBlockComponent implements OnInit, OnDestroy {
  @Input() text: string = ''
  loadingBehaviorSubj: Observable<any>
  isCodeDisplayed: boolean = false
  theme = 'vs-dark';

  model: CodeModel = {
    language: 'javascript',
    uri: 'main.js',
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor'],
    value: [
      `console.log('Hello')`,
      `console.log('World')`,
    ].join('\n')
  };

  onCodeChanged(value: any) {
    console.log('CODE', value);
  }


  constructor(
  ) {
    this.loadingBehaviorSubj = new Observable<any>((subscriber) => {
      subscriber.next(true);
      setTimeout(() => {subscriber.next(false); this.isCodeDisplayed = true;}, 2000)
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
