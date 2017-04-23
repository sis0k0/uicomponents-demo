import { Component, Input } from "@angular/core";

import { Ninja } from "./ninja.model";

@Component({
    moduleId: module.id,
    selector: "ninjas-list",
    templateUrl: "ninjas-list.component.html"
})
export class NinjasListComponent {
    @Input() ninjas: Ninja[];

    constructor() { }

    ngOnInit() { }
}