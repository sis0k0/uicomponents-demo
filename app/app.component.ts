import { Component, OnInit } from "@angular/core";

import { NinjasService } from "./ninjas.service";
import { Ninja } from "./ninja.model";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    ninjas: Ninja[];

    constructor(private ninjaService: NinjasService) {
    }

    ngOnInit() {
        this.ninjas = this.ninjaService.getItems();
    }
}
