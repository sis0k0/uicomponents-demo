import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { NinjaDetailComponent } from "./ninja-detail.component";

import { NinjasService } from "./ninjas.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        AppComponent,
        NinjaDetailComponent,
    ],
    providers: [
        NinjasService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
