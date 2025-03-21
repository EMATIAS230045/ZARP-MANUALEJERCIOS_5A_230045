import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ContentComponent } from '../../components/content/content.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';




@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    ContentComponent,
    FooterComponent,
    
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLoggedIn = false; // Estado inicial de sesión
  selectedOption: string = ''; // Para almacenar la opción seleccionada

  // Alternar Sidebar
  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  // Manejo de sesión
  onLogin() {
    this.isLoggedIn = true;
  }

  onLogout() {
    this.isLoggedIn = false;
  }

  // Método para manejar la opción seleccionada en el navbar
  onOptionSelected(option: string) {
    this.selectedOption = option; // Actualiza la opción seleccionada
  }
}
