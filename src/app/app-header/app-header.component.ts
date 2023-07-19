import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {

  @Input() 
  toolsOpen: boolean

  @Output()
  toolsOpenChange = new EventEmitter<boolean>()
  
  toggleToolMenu() {
    this.toolsOpenChange.emit(!this.toolsOpen)
  }
  
  get menuToolsToolTip() {
    return (this.toolsOpen ? 'Hide' : 'Show') + ' Tools'
  }


  @Input()
  editorOpen: boolean

  @Output()
  editorOpenChange = new EventEmitter<boolean>()

  toggleEditor() {
    this.editorOpenChange.emit(!this.editorOpen)
  }

  get editorToolTip() {
    return (this.editorOpen ? 'Hide' : 'Show') + ' Editor'
  }

}
