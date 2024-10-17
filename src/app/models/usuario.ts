import { ProgramaI } from "./programa";

export interface UsuarioI {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    programa: ProgramaI; // Relacionado con Programa
    tipo_usuario: string; // Podrías usar una enumeración si tienes varios tipos de usuarios
  }
  