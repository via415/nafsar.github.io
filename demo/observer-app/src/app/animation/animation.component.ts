import { Component } from '@angular/core';
import { CancelService } from '../cancelservices/cancel.service';

@Component({
    templateUrl: 'animation.component.html',
    styleUrls: ['./animation.cmponent.css']
})
export class AnimationComponent {
    demo = 'Angular Observable demo';
    cancel = 'Click cancel to remove animation';
    constructor(private cancelService: CancelService) { }
    playAnimation() {
        const cname = document.getElementById('notification').className += ' active';
        console.log('class=' + cname);

        this.cancelService.startAnimation(this.cancel);
    }
    cancelAnimation() {
        const clname = document.getElementById('notification').classList.remove('active');
        console.log(clname);
        this.cancelService.cancelAnimation();
    }
}
