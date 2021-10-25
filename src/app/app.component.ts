import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  botStyle = 'top: 100px';
  coordinate = [2, 2];
  rotate = 0;
  constructor() {
    this.generateStyle();
  }

  moveTop() {
    const coorX =
      this.coordinate[0] +
      Math.round(Math.cos(((90 - this.rotate) * Math.PI) / 180));
    const coorY =
      this.coordinate[1] +
      Math.round(Math.sin(((90 - this.rotate) * Math.PI) / 180));
    if (coorX >= 0 && coorX <= 4 && coorY >= 0 && coorY <= 4) {
      this.coordinate[0] = coorX;
      this.coordinate[1] = coorY;
    }
    this.generateStyle();
  }

  moveBottom() {
    const coorX =
      this.coordinate[0] -
      Math.round(Math.cos(((90 - this.rotate) * Math.PI) / 180));
    const coorY =
      this.coordinate[1] -
      Math.round(Math.sin(((90 - this.rotate) * Math.PI) / 180));
    if (coorX >= 0 && coorX <= 4 && coorY >= 0 && coorY <= 4) {
      this.coordinate[0] = coorX;
      this.coordinate[1] = coorY;
    }
    this.generateStyle();
  }

  rotateRight() {
    this.rotate = this.rotate + 90;
    this.generateStyle();
  }

  rotateLeft() {
    this.rotate = this.rotate - 90;
    this.generateStyle();
  }

  generateStyle() {
    let style = '';

    style = style + `bottom:${this.coordinate[1] * 100}px;`;
    style = style + `left:${this.coordinate[0] * 100}px;`;
    style = style.concat(`transform:rotate(${this.rotate}deg);`);
    this.botStyle = style;
  }
}
