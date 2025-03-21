import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { MatMenuModule } from '@angular/material/menu';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter([]),
    importProvidersFrom(
      RouterModule.forRoot([]),
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule  // Agregado MatMenuModule
    )
  ],
});
