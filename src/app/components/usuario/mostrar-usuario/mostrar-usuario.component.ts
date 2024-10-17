import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../../../models/usuario';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-mostrar-usuario',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {
  public Usuarios: UsuarioI[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios(): void {
    this.usuarioService.getAllUsuarios()
      .subscribe({
        next: (data) => {
          console.log(data); // Verifica si los datos se están recibiendo
          this.Usuarios = data;
        },
        error: (err) => {
          console.log('Error al obtener los usuarios', err);
        }
      });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/usuarios');
    this.usuarioService.deleteUsuario(id)
      .subscribe(
        () => {
          this.mostrarUsuarios();
        },
        err => {
          console.log('Error al eliminar el usuario', err);
          this.router.navigateByUrl('/usuarios');
        }
      );
  }
}
