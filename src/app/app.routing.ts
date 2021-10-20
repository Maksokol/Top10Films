import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {CardeditComponent} from "./cardedit/cardedit.component";
import {EditGuard} from "./edit.guard";

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "film/:id", component: CardeditComponent, canActivate: [EditGuard]},

];
export const routing = RouterModule.forRoot(routes);
