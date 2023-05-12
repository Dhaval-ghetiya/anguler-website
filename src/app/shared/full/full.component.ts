import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  // dashboardOpen = false
  // applicationOpen = false
  // sidebarOpen = true
  // sidebarToggle: boolean = false;
  // // sidebarToggle = false;
  // sidebarNavToggle: boolean = false
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {

  }

  // sidebar() {
  //   this.sidebarOpen = !this.sidebarOpen
  //   const headerEle = document.getElementById("header");
  //   if (headerEle) {
  //     if (this.sidebarOpen) {
  //       headerEle.classList.add("sidebar_show")
  //     } else {
  //       headerEle.classList.remove("sidebar_show")
  //     }
  //   }
  //   const sidebar = document.getElementById("main-container");
  //   if (sidebar) {
  //     if (this.sidebarOpen) {
  //       sidebar.classList.add("sidebar_show")
  //     } else {
  //       sidebar.classList.remove("sidebar_show")
  //     }
  //   }
  // }
}
