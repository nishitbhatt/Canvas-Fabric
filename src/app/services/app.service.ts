import { Injectable } from '@angular/core';
import { Subject }from 'rxjs' 
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private editorOpenSubject = new Subject<boolean>();
  private toolMenuOpenSubject = new Subject<boolean>();


  editorOpen$ = this.editorOpenSubject.asObservable();
  toolMenuOpen$ = this.toolMenuOpenSubject.asObservable();

  constructor() { 

  }


  toggleEditor(val: boolean){
    this.editorOpenSubject.next(val)
  }
  toggleToolMenu(val: boolean){
    this.toolMenuOpenSubject.next(val)
  }
  
}
