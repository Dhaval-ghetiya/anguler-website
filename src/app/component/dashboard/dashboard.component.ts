import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from 'src/app/modal/add-product/add-product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  itemCard = [
    {
      id : "1",
      name: "Sale!",
      img: "https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/v/e/vet%20vang%20(1).u2470.d20160606.t122127.jpg",
      heading: "Chuột Không Dây Logitech M238 Party",
      priceMrp: "399.000 ₫",
      price: "269.000 ₫",
      discount: "-33%",
      tag: "Sale"
    },
    {
      id : "2",
      name: "Sale!",
      img: "https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/a/n/anker%202%20cong%20power%2024w_white%20(1).u2470.d20160609.t094609.jpg",
      heading: "Adapter Sạc Anker PowerPort 2 Cổng USB -...",
      priceMrp: "439.000 ₫",
      price: "269.000 ₫",
      discount: "-33%",
      tag: "Sale"
    },
  ]

  card = [
    {
      id: "1",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    },
    {
      id: "2",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    },
    {
      id: "3",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    },
    {
      id: "4",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    },
    {
      id: "5",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    },
    {
      id: "6",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    },
    {
      id: "7",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Card title",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "Go somewhere",
    }
  ]
  constructor(
    public dialog: MatDialog
    ) {

  }
  ngOnInit() {

  }
  addProductComponentDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      panelClass: 'add-product-custom',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
