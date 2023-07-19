import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { fabric } from 'fabric'
import { Point } from 'fabric/fabric-impl';


@Component({
  selector: 'app-canvas-board',
  templateUrl: './canvas-board.component.html',
})
export class CanvasBoardComponent implements OnInit {

  @Output()
  select = new EventEmitter<any>()

  @Input()
  objectProps: any


  private canvasBoard: fabric.Canvas;

  constructor() { }

  ngOnInit(): void {
    // Init and add to canvas
    fabric.Object.prototype.objectCaching = false;

    this.canvasBoard = new fabric.Canvas('canvasBoard');

    this.canvasBoard
      .on('selection:created', () => this.onObjectSelect())
      .on('selection:cleared', () => this.onObjectSelect())
      .on('selection:updated', () => this.onObjectSelect())
      .on('object:resizing', () => this.onObjectSelect())
      .on('object:moving', () => this.onObjectSelect())
      .on('object:rotating', () => this.onObjectSelect())

    this.addTextbox()

  }

  getSelectedObject() {
    return this.canvasBoard.getActiveObject()
  }

  onObjectSelect() {
    const count = this.canvasBoard.getActiveObjects().length

    if (count > 0) {

      const object: any = this.canvasBoard.getActiveObject()
      console.log(object)

      return this.select.emit(object)
    }

    this.select.emit(0)
  }

  addTextbox() {
    let textbox = new fabric.Textbox('ADD TEXT HERE!', {
      fontFamily: 'Times New Roman',
      left: ((this.canvasBoard.width as number) / 2),
      top: ((this.canvasBoard.height as number) / 2),
      originX: 'center',
      originY: 'center',
      fill: '#000000',
      backgroundColor: '',
      opacity: 1,
      lineHeight: 1,
      strokeWidth: 1
    })

    this.canvasBoard.add(textbox);

    this.canvasBoard.setActiveObject(textbox);
  }

  setProp(newProp) {
    console.log('newProp', newProp)

    const object = this.getSelectedObject()

    switch (newProp.type) {

      case 'angle':
        object?.rotate(newProp.val)
        this.canvasBoard.renderAll()
        break;

      case 'opacity':
        object?.set(newProp.type, (newProp.val.target.value / 100))
        break;
      case 'strokeWidth':
        object?.set(newProp.type, (newProp.val.target.value / 10))
        break;

      default:
        object?.set(newProp.type, newProp.val)
        break;
    }


    this.canvasBoard.renderAll()
  }
}
