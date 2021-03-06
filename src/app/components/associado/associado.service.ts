import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  constructor(private snackBar: MatSnackBar) { }

  showMenssage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
}
