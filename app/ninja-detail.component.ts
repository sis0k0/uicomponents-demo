import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as dialogs from "ui/dialogs";

import { Ninja } from "./ninja.model";

@Component({
    moduleId: module.id,
    selector: "ninja-detail",
    templateUrl: "./ninja-detail.component.html"
})
export class NinjaDetailComponent {
    ninja: Ninja;
    ninjaForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.ninja = new Ninja();
        this.createForm();
    }

    createForm() {
        this.ninjaForm = this.formBuilder.group({
            name: [this.ninja.name, Validators.required],
            password: [this.ninja.password, Validators.required],
            skills: this.ninja.skills,
            dateOfBirth: this.ninja.dateOfBirth,
            pro: this.ninja.pro,
        });
    }

    submit() {
        console.dir(this.ninjaForm.value);
        this.reset();
    }

    clear() {
        const dialogSettings: dialogs.ConfirmOptions = {
            message: "You sure??!?!",
            okButtonText: "Do it!!",
            cancelButtonText: "Nope..",
        }

        dialogs.confirm(dialogSettings)
            .then(confirmed => {
                if (confirmed) {
                    this.reset();
                }
            });
    }

    reset() {
        this.ninjaForm.reset(this.ninja);
    }
}
