import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  dashboardOpen = false
  applicationOpen = false
  sidebarOpen = true
  sidebarToggle: boolean = false;
  // sidebarToggle = false;
  sidebarNavToggle: boolean = false
  constructor(
    public router: Router,
  ) {
  }

  ngOnInit(): void {
  }
  open() {
    this.dashboardOpen = !this.dashboardOpen
  }
  application() {
    this.applicationOpen = !this.applicationOpen
  }
  sidebar() {
    this.sidebarOpen = !this.sidebarOpen
    const headerEle = document.getElementById("header");
    if (headerEle) {
      if (this.sidebarOpen) {
        headerEle.classList.add("sidebar_show")
      } else {
        headerEle.classList.remove("sidebar_show")
      }
    }
    const sidebarComponent = document.getElementById("sidebar-component");
    if (sidebarComponent) {
      if (this.sidebarOpen) {
        sidebarComponent.classList.add("sidebar_show")
      } else {
        sidebarComponent.classList.remove("sidebar_show")
      }
    }
    const FullComponent = document.getElementById("main-container");
    if (FullComponent) {
      if (this.sidebarOpen) {
        FullComponent.classList.add("sidebar_show")
      } else {
        FullComponent.classList.remove("sidebar_show")
      }
    }
    const panel = document.getElementById("main-panel");
    if (panel) {
      if (this.sidebarOpen) {
        panel.classList.add("sidebar_show")
      } else {
        panel.classList.remove("sidebar_show")
      }
    }
  }

}
