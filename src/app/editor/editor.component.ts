import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith, take, tap } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { fabric } from 'fabric'

import { MatTooltip, getMatTooltipInvalidPositionError } from '@angular/material/tooltip';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],

})
export class EditorComponent {


  constructor(private clipboard: Clipboard) {

  }
  myControl = new FormControl('');
  options: string[] = ['Times New Roman', 'Initial', 'cursive', 'fantasy', 'math', 'monospace', 'system-ui'];
  filteredOptions!: Observable<string[]>;
  isEditorBodyScrolled = false
  isBold = false

  @Input() object: fabric.Object


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  @HostListener('document:scroll', ['$event']) // for window scroll events
  onEditorScroll(event: Event) {
    this.isEditorBodyScrolled = (event.currentTarget as HTMLElement).scrollTop <= 20 ? false : true
  }

  //-----------------------------------------------------------------

  math = Math

  @Input()
  showEditor: boolean

  @Input()
  objectProps: fabric.Text

  @Output()
  propchange = new EventEmitter()

  fontShadowInitValue: fabric.Shadow = {
    blur: 0,
    offsetX: 0,
    offsetY: 0,
    color: '',
    initialize: function (options?: string | fabric.IShadowOptions | undefined): fabric.Shadow {
      throw new Error('Function not implemented.');
    },
    toSVG: function (object: fabric.Object): string {
      throw new Error('Function not implemented.');
    },
    toObject: function () {
      throw new Error('Function not implemented.');
    }
  }

  fontShadow: fabric.Shadow = new fabric.Shadow(this.fontShadowInitValue)

  showFontShadowContainer = true

  updateCanvas(type: any, optVal?: any) {

    let val = this.objectProps[type]

    if (optVal !== undefined) {
      val = optVal
    }
    if (type === 'textAlign') {
      val = optVal.value
    }
    if (type === 'shadow') {
      val = this.fontShadow
    }
    this.propchange.emit({ type, val })
  }

  get isFontBold() {
    return this.objectProps.fontWeight === 'bold'
  }

  get isFontItalic() {
    return this.objectProps.fontStyle === 'italic'
  }

  get isFontHasUnderline() {
    return !!this.objectProps.underline
  }

  get isFontHasLinethrough() {
    return !!this.objectProps.linethrough
  }

  get isFontHasOverline() {
    return !!this.objectProps.overline
  }

  get isFontShadowEnabled() {
    return this.showFontShadowContainer = !this.showFontShadowContainer
  }

  @ViewChild(MatTooltip) fontColorTooltip: MatTooltip
  @ViewChild(MatTooltip) bgColorTooltip: MatTooltip
  @ViewChild(MatTooltip) fontStrokeColorTooltip: MatTooltip
  @ViewChild(MatTooltip) fontShadowTooltip: MatTooltip

  copyFontColorToClipboard(fontColor) {
    this.clipboard.copy(fontColor);
    setTimeout(() => this.fontColorTooltip.hide(), 2000)
  }
  copyBGColorToClipboard(bgColor) {
    this.clipboard.copy(bgColor);
    setTimeout(() => this.bgColorTooltip.hide(), 2000)

  }
  copyFontStrokeColorToClipboard(strokeColor) {
    this.clipboard.copy(strokeColor);
    setTimeout(() => this.fontStrokeColorTooltip.hide(), 2000)
  }
  copyFontShadowColorClipboard(shadowColor) {
    
    this.clipboard.copy(shadowColor);
    setTimeout(() => this.fontShadowTooltip.hide(), 2000)
  }

  removeShadow() {
    
    this.propchange.emit({ type: 'shadow', val: this.fontShadowInitValue })
    this.showFontShadowContainer = false
  }
  addShadow() {
    
    this.propchange.emit({ type: 'shadow', val: this.fontShadow })
    this.showFontShadowContainer = true
  }
}
