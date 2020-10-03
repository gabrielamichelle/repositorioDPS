import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarVisitaComponent } from './agregar-visita/agregar-visita.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VisitasComponent } from './visitas/visitas.component';
import { MenuComponent } from './menu/menu.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { ClientePruebaComponent } from './cliente-prueba/cliente-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarClienteComponent,
    AgregarVisitaComponent,
    ClientesComponent,
    VisitasComponent,
    MenuComponent,
    ModificarClienteComponent,
    ClientePruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
