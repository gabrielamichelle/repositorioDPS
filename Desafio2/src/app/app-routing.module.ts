import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { VisitasComponent } from './visitas/visitas.component';
import { AgregarVisitaComponent } from './agregar-visita/agregar-visita.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'nuevo-cliente',
    component: AgregarClienteComponent
  },
  {
    path: 'modificar-cliente',
    component: ModificarClienteComponent
  },
  {
    path: 'visitas/:id',
    component: VisitasComponent
  },
  {
    path: 'nueva-visita/:id/:visitas',
    component: AgregarVisitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
