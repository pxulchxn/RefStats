import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from 'src/app/program/api/product';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {ProductService} from 'src/app/program/service/product.service';
import {Table} from 'primeng/table';

@Component({
  templateUrl: './overview.admin.component.html'
})
export class OverviewAdminComponent implements OnInit, OnDestroy {

  knobValue: number = 90;

  selectedWeek: any;

  weeks: any[] = [];

  barData: any;

  barOptions: any;

  artData: any;

  leagueMenData: any;

  leagueWomenData: any;

  leagueYouthData: any;

  pieOptions: any;

  products: Product[] = [];

  subscription: Subscription;

  cols: any[] = [];

  constructor(private productService: ProductService, private layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.initCharts();
    });
  }

  ngOnInit(): void {
    this.weeks = [{
      label: 'Last Week',
      value: 0,
      data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 53, 27, 33], [37, 11, 40, 62, 3, 28, 7]]
    },
      {
        label: 'This Week',
        value: 1,
        data: [[35, 19, 40, 61, 16, 55, 30], [48, 78, 10, 29, 76, 77, 10], [28, 48, 40, 19, 86, 27, 90]]
      }];

    this.selectedWeek = this.weeks[0];
    this.initCharts();
    this.productService.getProductsSmall().then(data => this.products = data);

    this.cols = [
      {header: 'Name', field: 'name'},
      {header: 'Category', field: 'category'},
      {header: 'Price', field: 'price'},
      {header: 'Status', field: 'inventoryStatus'}
    ]
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.barData = {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          label: 'Gesamt',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          barThickness: 12,
          borderRadius: 12,
          data: this.selectedWeek.data[0]
        },
        {
          label: 'Schiedsrichter',
          backgroundColor: documentStyle.getPropertyValue('--primary-400'),
          barThickness: 12,
          borderRadius: 12,
          data: this.selectedWeek.data[1]
        },
        {
          label: 'Schiedsrichter-Assistent',
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          barThickness: 12,
          borderRadius: 12,
          data: this.selectedWeek.data[2]
        }
      ]
    };

    this.artData = {
      labels: ['Herren', 'Frauen', 'Junioren'],
      datasets: [
        {
          data: [67, 4, 30],
          backgroundColor: [
            documentStyle.getPropertyValue('--primary-700'),
            documentStyle.getPropertyValue('--primary-400'),
            documentStyle.getPropertyValue('--primary-100')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--primary-600'),
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--primary-200')
          ]
        }
      ]
    };

    this.leagueMenData = {
      labels: ['Landesliga', 'Landesklasse', 'Kreisoberliga', 'Kreisliga', '1.Kreisklasse'],
      datasets: [
        {
          data: [4, 6, 22, 40, 3],
          backgroundColor: [
            documentStyle.getPropertyValue('--primary-700'),
            documentStyle.getPropertyValue('--primary-400'),
            documentStyle.getPropertyValue('--primary-100'),
            documentStyle.getPropertyValue('--primary-400'),
            documentStyle.getPropertyValue('--primary-100')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--primary-600'),
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--primary-200'),
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--primary-200')
          ]
        }
      ]
    };

    this.leagueWomenData = {
      labels: ['Kreisliga', '1.Kreisklasse'],
      datasets: [
        {
          data: [4, 6],
          backgroundColor: [
            documentStyle.getPropertyValue('--primary-700'),
            documentStyle.getPropertyValue('--primary-400')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--primary-600'),
            documentStyle.getPropertyValue('--primary-300')
          ]
        }
      ]
    };

    this.leagueYouthData = {
      labels: ['Landesliga', 'Landesklasse', 'Kreisliga', '1.Kreisklasse'],
      datasets: [
        {
          data: [4, 6, 22, 3],
          backgroundColor: [
            documentStyle.getPropertyValue('--primary-700'),
            documentStyle.getPropertyValue('--primary-400'),
            documentStyle.getPropertyValue('--primary-100'),
            documentStyle.getPropertyValue('--primary-400')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--primary-600'),
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--primary-200'),
            documentStyle.getPropertyValue('--primary-300')
          ]
        }
      ]
    };

    this.barOptions = {
      animation: {
        duration: 0
      },
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
            font: {
              weight: 700,
            },
            padding: 28
          },
          position: 'bottom'
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.pieOptions = {
      animation: {
        duration: 0
      },
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
            font: {
              weight: 700,
            },
            padding: 28
          },
          position: 'bottom'
        }
      }
    };
  }

  onWeekChange() {
    let newBarData = {...this.barData};
    newBarData.datasets[0].data = this.selectedWeek.data[0];
    newBarData.datasets[1].data = this.selectedWeek.data[1];
    this.barData = newBarData;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
