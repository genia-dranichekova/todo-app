import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditComponent} from '../edit/edit.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  activeList = ['Buy products', 'Schedule meeting', 'Organize party'];
  @Input() completedList;
  @Output() active = new EventEmitter<any>();
  hide = false;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
      this.active.emit(this.activeList);
  }
  onDelete(i) {
    this.activeList.splice(i, 1);
  }
  onCheckOff(i) {
    const removedItem = this.activeList.splice(i, 1);
    this.completedList.push(removedItem);
  }

  onAdd(item) {
    if (item.trim() !== '') {
      this.activeList.push(item);
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

  onEdit(i) {
    const dialogRef = this.dialog.open(EditComponent, { data: this.activeList[i] });
    dialogRef.afterClosed().subscribe(updatedItem => {
      this.activeList[i] = updatedItem;
    });
  }
}
