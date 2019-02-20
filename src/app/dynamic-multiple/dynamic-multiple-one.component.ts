import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DynamicMultipleTwoComponent } from './dynamic-multiple-two.component';

@Component({
  selector: 'app-dynamic-multiple-one',
  templateUrl: './dynamic-multiple-one.component.html',
  styleUrls: ['./dynamic-multiple-one.component.css']
})
export class DynamicMultipleOneComponent implements OnInit {
  constructor(private dailog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dailog.open(DynamicMultipleTwoComponent);
  }
}
