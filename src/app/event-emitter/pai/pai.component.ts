import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

    familia: Object[];

    constructor() {
      this.familia = [
        {
          nome: 'Vitor',
          sobreNome: 'Borges'
        },
        {
          nome: 'Emerson',
          sobreNome: 'Daniel'
        },
        {
          nome: 'Thiago',
          sobreNome: 'Contre!'
        }
      ];
    }

    ngOnInit() {
        console.log("Pai", this.familia);
    }

    reciverFeedback(respostaFilho) {
      console.log('Foi emitido o evento FILHO e chegou no pai >>>> ', respostaFilho);
      
      this.familia = this.familia.concat(respostaFilho); 
      
      console.log("Novo valor para familia no PaiComponent" , this.familia);
    }

}


