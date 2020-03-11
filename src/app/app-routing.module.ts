import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroListComponent } from './superheroes-material-design/superhero-list/superhero-list.component';
import { CreateSuperheroReactiveFormComponent } from './superheroes-material-design/create-superhero-reactive-form/create-superhero-reactive-form.component';
import { SuperheroComponent } from './superheroes-material-design/superhero/superhero.component';
import { ErrorPageComponent } from './superheroes-material-design/error-page/error-page.component';
import { CreateSuperheroComponent } from './superheroes-material-design/create-superhero/create-superhero.component';
import { SuperheroesExpandableListComponent } from './superheroes-material-design/superheroes-expandable-list/superheroes-expandable-list.component';
import { SuperheroNewListComponent } from './superheroes-material-design/superhero-new-list/superhero-new-list.component';
import { SuperheroGridListComponent } from './superheroes-material-design/superhero-grid-list/superhero-grid-list.component';
import { HomeComponent } from './superheroes-material-design/home/home.component';

let routes: Routes = [
  {
    path: "superhero-home",
    component: HomeComponent
  },
  {
    path: "heroes-accordion",
    component: SuperheroesExpandableListComponent
  },
  {
    path: "heroes",
    component: SuperheroListComponent
  },
  {
    path: "hero-list",
    component: SuperheroNewListComponent
  },
  {
    path: "hero-grid-list",
    component: SuperheroGridListComponent
  },
  {
    path: "create-hero",
    component: CreateSuperheroComponent
  },
  {
    path: "hero/:heroName",
    component: SuperheroComponent
  },
  {
    path: "list",
    redirectTo: "/heroes"
  }
];

routes = routes.concat([{
  path: "",
  redirectTo: "/heroes-accordion",
  pathMatch: "full"
},
{
  path: "**",
  component: ErrorPageComponent
}
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
