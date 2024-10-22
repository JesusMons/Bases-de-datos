import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UsuarioI } from '../../../models/usuario';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent implements OnInit{

  public form: FormGroup;
  usuarioService = inject(UsuarioService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) 
  {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      programa: ['', Validators.required],
      tipo_usuario: ['', Validators.required],
      estado: [false],
    });
  }

  ngOnInit(): void {
      
  }

  onSubmit(): void {
    const formValue: UsuarioI = this.form.value;
    console.log(formValue);
    this.usuarioService.createUsuario(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

    //  }, 0);
    console.log(formValue)
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

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get email() { return this.form.get('email'); }
  get estado() { return this.form.get('estado'); }
  get programa() { return this.form.get('programa'); }
  get tipo_usuario() { return this.form.get('tipo_usuario'); }

}