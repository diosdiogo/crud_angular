import { Component, OnInit } from '@angular/core';
import { AssociadoService } from './../associado.service';

@Component({
  selector: 'app-associado-create',
  templateUrl: './associado-create.component.html',
  styleUrls: ['./associado-create.component.css']
})
export class AssociadoCreateComponent implements OnInit {

  constructor(private associadoService: AssociadoService)  { }

  ngOnInit(): void {
  
  }

  createAssociado(): void {
    this.associadoService.showMenssage("clicou");
  }

}
