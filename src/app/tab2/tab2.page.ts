import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

update: boolean = false;

  constructor() {}

edit() {
this.update = !this.update;
}

    btnActivate(ionicButton) {
        ionicButton.color =  'primary';

         }
    }
