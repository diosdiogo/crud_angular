import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-associado',
  templateUrl: './associado.component.html',
  styleUrls: ['./associado.component.css']
})
export class AssociadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  navigateToAssociadoCreate(): void {
    this.router.navigate(['/associado/create'])
  }
}