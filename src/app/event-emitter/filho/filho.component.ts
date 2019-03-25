import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
      console.log("Filho Component", this.recebeFamilia);
  }

  feedback() {
    console.log('Resposta para o component pai', 
    this.respostaFamilia.emit({"nome": "Raphella", "SobreNome": "Souza"}));
  } 

}