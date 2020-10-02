import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarVisitaComponent } from './agregar-visita/agregar-visita.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VisitasComponent } from './visitas/visitas.component';
import { MenuComponent } from './menu/menu.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarClienteComponent,
    AgregarVisitaComponent,
    ClientesComponent,
    VisitasComponent,
    MenuComponent,
    ModificarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
