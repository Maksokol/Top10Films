import { Routes, RouterModule } from "@angular/router";
import {MainComponent} from "./main/main.component";
import {CardeditComponent} from "./cardedit/cardedit.component";

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "film/:id", component: CardeditComponent},

];
export const routing = RouterModule.forRoot(routes);
