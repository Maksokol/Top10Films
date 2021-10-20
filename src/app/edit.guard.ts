import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CardService} from "./card.service";

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(private SCard: CardService,
              private Router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let exist = this.SCard.isExist(route.params['id'])
    if (exist) {
      return true;
    } else {
      this.Router.navigate(['/']);
      return false;
    }

  }

}
