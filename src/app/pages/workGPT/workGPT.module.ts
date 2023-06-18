import { WorkGPTRoutingModule } from "./workGPT-routing.moudle";
import { IonicModule } from "@ionic/angular";
import { WorkGPTPage } from "./workGPT.page";
import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChatBlockComponent} from "./chat-block/chatBlock.component";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    WorkGPTPage,
    ChatBlockComponent
  ],
  imports: [
    IonicModule,
    WorkGPTRoutingModule,
    CommonModule,
    MonacoEditorModule,
    FormsModule,
  ]
})
export class WorkGPTModule { }
