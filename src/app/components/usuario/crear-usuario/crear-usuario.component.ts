import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service'; // Cambia a tu servicio de usuario
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UsuarioI } from '../../../models/usuario'; // Cambia a tu modelo de usuario
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router
  ) {
    // Inicializa el formulario
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      programa: ['', [Validators.required]],
      tipo_usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: UsuarioI = this.form.value;
    console.log(formValue);
    this.usuarioService.createUsuario(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Usuario Creado', life: 5000 });
        }, 0);
        this.router.navigateByUrl('usuarios');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/usuarios');
  }

  // Getters para acceder a los campos del formulario
  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get email() { return this.form.get('email'); }
  get programa() { return this.form.get('programa'); }
  get tipo_usuario() { return this.form.get('tipo_usuario'); }
  get password() { return this.form.get('password'); }
}
