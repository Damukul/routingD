import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trymodule';
constructor( public router: Router)
{

}

cooldrinks()
{
  this.router.navigateByUrl('cooldrinks');
}
mocktails()
{
  this.router.navigateByUrl('mocktails');
}
mixes()
{
  this.router.navigateByUrl('/mixesModule/mixes');
}
}


