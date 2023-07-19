import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tool-menu',
  templateUrl: './tool-menu.component.html',
})
export class ToolMenuComponent {

  @Output()
  addTextBox = new EventEmitter<boolean>()

  addTextboxToCanvas() {
    this.addTextBox.emit()
  }
}
