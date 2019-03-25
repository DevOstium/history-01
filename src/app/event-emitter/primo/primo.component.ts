import { Component } from '@angular/core';

@Component({
     selector : 'ap-primo',
     templateUrl : 'primo.component.html'
})
export class PrimoComponent {



    dadosEnviadoPeloFilho(dadosResebidos){

        console.log("Primo recebendo dados do FILHO ", dadosResebidos);
    }


}