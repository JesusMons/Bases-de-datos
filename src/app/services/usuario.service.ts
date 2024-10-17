import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from '../models/usuario';

@Injectable({
providedIn: 'root'
})
export class UsuarioService {
api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/usuarios/`; // Cambié 'clientes' a 'usuarios'

constructor(
    private http: HttpClient
) { }

  // Obtener todos los usuarios
getAllUsuarios(): Observable<UsuarioI[]> {
    return this.http
    .get<UsuarioI[]>(this.base_path);
}

  // Obtener un solo usuario por ID
getOneUsuario(id: number): Observable<UsuarioI> {
    return this.http
    .get<UsuarioI>(`${this.base_path}${id}`);
}

  // Crear un nuevo usuario
createUsuario(data: any): Observable<UsuarioI> {
    return this.http.post<UsuarioI>(this.base_path, data);
}

// Actualizar un usuario existente
updateUsuario(id: number, data: any): Observable<UsuarioI> {
    return this.http.put<UsuarioI>(`${this.base_path}${id}`, data);
}

// Eliminar un usuario por ID
deleteUsuario(id: number): Observable<UsuarioI> {
    return this.http.delete<UsuarioI>(`${this.base_path}${id}`);
}
}
