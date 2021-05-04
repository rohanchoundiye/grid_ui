import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formatStringValue: string;
  showMessageValue: string;
  userData: any = [];

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getImageData();
  }

  getImageData() {
    this.appService.getData().subscribe((response) => {
      this.userData = response;
    }, (error) => {
      console.log('Server Side Error occured');
    });
  }

  onClickRemoveSpaces(formatString: string) {
    if (formatString) {
      this.formatStringValue = formatString.replace(/\s+/g, ' ');
    }
  }

  onClickShowMessage(value: string) {
    const num = Number(value);
    if (!isNaN(num)) {
      if (num % 7 === 0 && num % 3 === 0) {
        this.showMessageValue = 'World ABC';
      } else if (num % 3 === 0) {
        this.showMessageValue = 'ABC';
      } else if (num % 7 === 0) {
        this.showMessageValue = 'World';
      }
    } else {
      return;
    }
  }

}
