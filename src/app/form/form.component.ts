import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<any>();

  submitQuote(form: NgForm, formValue: any) {
    if (
      formValue.userName != "" &&
      formValue.qoute != "" &&
      formValue.author != ""
    ) {
      this.addQuote.emit(formValue);
      form.reset();
    } else {
      alert("Enter name and quote please");
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
