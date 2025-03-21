import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() optionSelected = new EventEmitter<string>(); // Emite la opción seleccionada
  @Input() isLoggedIn: boolean = false;
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() toggleSidebar = new EventEmitter<void>(); // Evento para alternar sidebar

  selectOption(option: string) {
    this.optionSelected.emit(option); // Emite la opción seleccionada al componente padre
  }
  
  // Opciones del menú
  mainMenuOptions = [
    { id: 1, label: 'Inicio', icon: 'home' },
    { id: 2, label: 'Perfil', icon: 'person' },
    { id: 3, label: 'Notificaciones', icon: 'notifications' },
    { id: 4, label: 'Mensajes', icon: 'message' },
    { id: 5, label: 'Calendario', icon: 'calendar_today' },
    { id: 6, label: 'Tareas', icon: 'task' },
    { id: 7, label: 'Archivos', icon: 'folder' },
    { id: 8, label: 'Configuración', icon: 'settings' },
    { id: 9, label: 'Ayuda', icon: 'help' },
    { id: 10, label: 'Reportes', icon: 'assessment' },
    { id: 11, label: 'Cerrar Sesión', icon: 'logout' }
  ];

  onMenuOptionSelected(option: any) {
    if (option.label === 'Cerrar Sesión') {
      this.logout();
    }
  }

  logout() {
    this.logoutEvent.emit();
  }

  toggleSidenav() {
    this.toggleSidebar.emit(); // Emitir evento para abrir/cerrar sidebar
  }
}
