import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() public sidenavToggle = new EventEmitter();

    public onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
