import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CardService} from "./card.service";

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(private SCard : CardService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (this.SCard.isExist(route.params['id']))

  }

}
