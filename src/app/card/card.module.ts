import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CardModule {

  constructor(
    public Name?: string,
    public Img?: string,
    public Score?: number,
    public About?: string
) { }
}
