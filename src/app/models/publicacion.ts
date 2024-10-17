import { UsuarioI } from "./usuario";
import { GrupoInvestigacionI } from "./grupo";

export interface PublicacionI {
    id?: number;
    titulo: string;
    resumen: string;
    fecha_publicacion: Date;
    tipo_publicacion: string; // Podrías usar una enumeración para los tipos de publicaciones
    categoria: string; // Podrías usar una enumeración para las categorías
    palabras_clave: string[];
    usuario: UsuarioI; // Relacionado con Usuario
    grupo_investigacion: GrupoInvestigacionI; // Relacionado con Grupo de Investigación
}
