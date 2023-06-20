import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, interval, map, mergeMap, Observable, timer} from "rxjs";

@Component({
  selector: 'app-chat-block',
  templateUrl: './chatBlock.component.html',
  styleUrls: ['./chatBlock.component.scss']
})
export class ChatBlockComponent implements OnInit, OnDestroy {
  @Input() text: string = ''
  result: any
  loadingBehaviorSubj: Observable<any>
  isCodeDisplayed: boolean = false
  // https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html#lineHeight
  editorOptions = {theme: 'vs-dark', language: 'javascript', cursorWidth: 0, cursorBlinking: 'solid', cursorStyle: 'underline-thin',
    minimap: {
      autohide: true,
      enabled: false
    },
    scrollbar: {
      handleMouseWheel: false,
      vertical: 'hidden'
    }
  };
  code: string= 'function x() {\nconsole.log("Hello world!");\n} \nx()';


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

  execute() {
    const F = new Function (this.code);
    this.result = F();
    console.log(this.result)
  }
}
