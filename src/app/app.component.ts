import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgAds = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
    "assets/9.jpg",
    "assets/10.jpg",
  ];

  productDialog: boolean = false;
  productItem: any;
  searchKey = '';
  categoryKey = '';
  categorys: any = ['全部'];
  products = [
    {
      category: "類別A",
      title: '商品001',
      content: '商品001詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/1.jpg'
    },
    {
      category: "類別A",
      title: '商品002',
      content: '商品002詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/2.jpg'
    },
    {
      category: "類別A",
      title: '商品003',
      content: '商品003詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/3.jpg'
    },
    {
      category: "類別B",
      title: '商品004',
      content: '商品004詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/4.jpg'
    },
    {
      category: "類別B",
      title: '商品005',
      content: '商品005詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/5.jpg'
    },
    {
      category: "類別B",
      title: '商品006',
      content: '商品006詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/6.jpg'
    },
    {
      category: "類別B",
      title: '商品007',
      content: '商品007詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/7.jpg'
    },
    {
      category: "類別B",
      title: '商品008',
      content: '商品008詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/8.jpg'
    },
    {
      category: "類別B",
      title: '商品009',
      content: '商品009詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/9.jpg'
    },
    {
      category: "類別C",
      title: '商品010',
      content: '商品010詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/10.jpg'
    },
    {
      category: "類別A",
      title: '商品011',
      content: '商品011詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/11.jpg'
    },
    {
      category: "類別A",
      title: '商品012',
      content: '商品012詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/12.jpg'
    },
    {
      category: "類別D",
      title: '商品013',
      content: '商品013詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/13.jpg'
    },
    {
      category: "類別B",
      title: '商品014',
      content: '商品014詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/14.jpg'
    },
    {
      category: "類別B",
      title: '商品015',
      content: '商品015詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/15.jpg'
    },
    {
      category: "類別B",
      title: '商品016',
      content: '商品016詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/16.jpg'
    },
    {
      category: "類別B",
      title: '商品017',
      content: '商品017詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/17.jpg'
    },
    {
      category: "類別B",
      title: '商品018',
      content: '商品018詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/18.jpg'
    },
    {
      category: "類別D",
      title: '商品019',
      content: '商品019詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/19.jpg'
    },
    {
      category: "類別D",
      title: '商品020',
      content: '商品020詳細介紹，~~~~~~~~~~~~~~~~~~~~~~~~~~............',
      img: 'assets/20.jpg'
    }
  ];

  nowTime = +new Date();
  expectTime = this.nowTime + 86400 *1000;
  times = (this.expectTime - this.nowTime) / 1000;
  d: number;
  h: number;
  m: number;
  s: number;

  ngOnInit() {
    this.products.forEach(v => {
      if (!this.categorys.includes(v.category)) {
        this.categorys.push(v.category);
      }
    });

    this.timer();
  }

  openProductDialog(productItem: any) {
    this.productItem = productItem;
    this.productDialog = true;
  }

  search(categoryKey: string) {
    this.categoryKey = categoryKey === '全部' ? '' : categoryKey;
  }

  timer() {
    setInterval(() => {
      this.times--;
      this.d = parseInt(`${this.times / 60 / 60 / 24}`);
      this.h = parseInt(`${(this.times / 60 / 60) % 24}`);
      this.m = parseInt(`${(this.times / 60) % 60}`);
      this.s = this.times % 60;

      if (this.s > 0) {
        this.s = this.s < 10 ? 0 + this.s : this.s;
      }

    }, 1000);
  }
}
