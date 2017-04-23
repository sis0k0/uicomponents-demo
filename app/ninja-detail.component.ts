import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "ninja-detail",
    templateUrl: "./ninja-detail.component.html"
})
export class NinjaDetailComponent {
    ninjaForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.ninjaForm = this.formBuilder.group({
            name: ["", Validators.required],
            password: ["", Validators.required],
            skills: 25,
            dateOfBirth: new Date(),
        });
    }

    submit() {
        console.dir(this.ninjaForm.value);
        this.clear();
    }

    clear() {
        this.ninjaForm.reset({
            name: "",
            password: "",
            skills: 25,
            dateOfBirth: new Date(),
        })
    }
}
