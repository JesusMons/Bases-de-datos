import { Routes } from '@angular/router';
// IMportar componentes de ususario
import { MostrarUsuarioComponent } from './components/usuario/mostrar-usuario/mostrar-usuario.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';

// IMportar componentes de facultades
import { MostrarFacultadComponent } from './components/Facultad/mostrar-facultad/mostrar-facultad.component';
import { CrearFacultadComponent } from './components/Facultad/crear-facultad/crear-facultad.component';
import { ActualizarFacultadComponent } from './components/Facultad/actualizar-facultad/actualizar-facultad.component';
import { EliminarFacultadComponent } from './components/Facultad/eliminar-facultad/eliminar-facultad.component';

// Importar componentes de programas
import { MostrarProgramaComponent } from './components/Programa/mostrar-programa/mostrar-programa.component';
import { CrearProgramaComponent } from './components/Programa/crear-programa/crear-programa.component';
import { ActualizarProgramaComponent } from './components/Programa/actualizar-programa/actualizar-programa.component';
import { EliminarProgramaComponent } from './components/Programa/eliminar-programa/eliminar-programa.component';

// Importar componentes de grupos de investigacion
import { MostrarGrupoComponent } from './components/Grupo/mostrar-grupo/mostrar-grupo.component';
import { CrearGrupoComponent } from './components/Grupo/crear-grupo/crear-grupo.component';
import { ActualizarGrupoComponent } from './components/Grupo/actualizar-grupo/actualizar-grupo.component';
import { EliminarGrupoComponent } from './components/Grupo/eliminar-grupo/eliminar-grupo.component';

// Importar componentes de publicaciones
import { MostrarPublicacionComponent } from './components/Publicacion/mostrar-publicacion/mostrar-publicacion.component';
import { CrearPublicacionComponent } from './components/Publicacion/crear-publicacion/crear-publicacion.component';
import { ActualizarPublicacionComponent } from './components/Publicacion/actualizar-publicacion/actualizar-publicacion.component';
import { EliminarPublicacionComponent } from './components/Publicacion/eliminar-publicacion/eliminar-publicacion.component';



export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    //Rutas de usuarios
    {
        path: "Usuarios",
        component: MostrarUsuarioComponent
    },
    {
        path: "Usuario/nuevo",
        component: CrearUsuarioComponent
    },
    {
        path: "Uusario/edit/:id",
        component: ActualizarUsuarioComponent
    },
    {
        path: "Uusario/delete/:id",
        component: EliminarUsuarioComponent
    },
    // Rutas de facultades  
    {
        path: "Facultades",
        component: MostrarFacultadComponent
    },
    {
        path: "Facultad/nueva",
        component: CrearFacultadComponent
    },
    {
        path: "Facultad/edit/:id",
        component: ActualizarFacultadComponent
    },
    {
        path: "Facultad/delete/:id",
        component: EliminarFacultadComponent
    },
    // Rutas de programas
    {
        path: "Programas",
        component: MostrarProgramaComponent
    },
    {
        path: "Programa/nuevo",
        component: CrearProgramaComponent
    },
    {
        path: "Programa/edit/:id",
        component: ActualizarProgramaComponent
    },
    {
        path: "Programa/delete/:id",
        component: EliminarProgramaComponent
    }
    // Rutas de grupos de investigacion
    ,
    {
        path: "Grupos",
        component: MostrarGrupoComponent
    },
    {
        path: "Grupo/nuevo",
        component: CrearGrupoComponent
    },
    {
        path: "Grupo/edit/:id",
        component: ActualizarGrupoComponent
    },
    {
        path: "Grupo/delete/:id",
        component: EliminarGrupoComponent
    }
    // Rutas de publicaciones
    ,
    {
        path: "Publicaciones",
        component: MostrarPublicacionComponent
    },
    {
        path: "Publicacion/nueva",
        component: CrearPublicacionComponent
    },
    {
        path: "Publicacion/edit/:id",
        component: ActualizarPublicacionComponent
    },
    {
        path: "Publicacion/delete/:id",
        component: EliminarPublicacionComponent
    }
];