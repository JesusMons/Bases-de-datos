import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[]=[];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: '/Usuarios'
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Facultades',
        icon: 'pi pi-building-columns',
        routerLink: '/Facultades'
      },
      {
        label: 'Programas',
        icon: 'pi pi-desktop',
        routerLink: '/Programas'
      },
      {
        label: 'Grupos de Investigative',
        icon: 'pi pi-globe',
        routerLink: '/Grupos'
      }, 
      {
        label: 'Publicaciones',
        icon: 'pi pi-linkedin',
        routerLink: '/Publicaciones'
      }

    ];
  }
}
