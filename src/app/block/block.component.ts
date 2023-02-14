import { Component } from "@angular/core";

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.css"]
})
export class BlockComponent {
  cube = ['A B C'];
  divClasses = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
}

