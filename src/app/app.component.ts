import { Component, ViewChild } from '@angular/core';
import { CanvasBoardComponent } from './canvas-board/canvas-board.component'
import { ActiveSelection } from 'fabric/fabric-impl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @ViewChild(CanvasBoardComponent) canvas: CanvasBoardComponent

  isToolMenuOpen: boolean = true
  isEditorOpen: boolean = true
  isObjectSelected: boolean = false
  objectProps: any = {}

  toggleToolMenu(val: boolean) {
    this.isToolMenuOpen = val
  }
  toggleEditor(val: boolean) {
    this.isEditorOpen = val
  }


  addTextBoxInCanvas() {
    this.canvas.addTextbox()
  }

  objectSelect(props: ActiveSelection | 0) {

    if (props === 0) {
      this.isObjectSelected = false
      return;
    }

    this.isObjectSelected = true
    this.objectProps = props
  }

  updateCanvas({ type, val}: any){
    this.canvas.setProp({type, val})
  }

}
