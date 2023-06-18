import { WorkGPTRoutingModule } from "./workGPT-routing.moudle";
import { IonicModule } from "@ionic/angular";
import { WorkGPTPage } from "./workGPT.page";
import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChatBlockComponent} from "./chat-block/chatBlock.component";
import {CodeEditorModule} from "@ngstack/code-editor";

@NgModule({
  declarations: [
    WorkGPTPage,
    ChatBlockComponent
  ],
  imports: [
    IonicModule,
    WorkGPTRoutingModule,
    CommonModule,
    CodeEditorModule.forChild(),
  ]
})
export class WorkGPTModule { }
