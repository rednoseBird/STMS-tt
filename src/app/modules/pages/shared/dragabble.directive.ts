import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Coordinates } from 'core/models/coordinates.class';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {
  @Input('appDraggable') position: Coordinates;
  draggable = false;
  offset = {x: 0, y: 0};

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.setPosition(
      (this.position.x) ? this.position.x : this.el.nativeElement.offsetLeft,
      (this.position.y) ? this.position.y : this.el.nativeElement.offsetTop,
      this.offset.x,
      this.offset.y
    );
  }

  @HostListener('mousedown', ['$event']) onMouseDown(e) {
    this.offset = {x: e.offsetX, y: e.offsetY};
    this.draggable = true;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(e) {
    if (this.draggable) {
      this.setPosition(e.clientX, e.clientY, this.offset.x, this.offset.y);
    }
  }

  @HostListener('mouseup', ['$event']) onMouseUp(e) {
    this.offset = {x: 0, y: 0};
    this.draggable = false;
  }

  @HostListener('mouseoout', ['$event']) onMouseOut(e) {
    this.offset = {x: 0, y: 0};
    this.draggable = false;
  }

  @HostListener('dragstart', ['$event']) onDragStart(e) {
    e.preventDefault();
  }
  @HostListener('drag', ['$event']) onDrag(e) {
    e.preventDefault();
  }
  @HostListener('dragend', ['$event']) onDragEnd(e) {
    e.preventDefault();
  }

  setPosition(x, y, oX, oY) {
    const deltaX = this.el.nativeElement.offsetLeft + oX,
          deltaY = this.el.nativeElement.offsetTop + oY;
    this.el.nativeElement.style.transform = `translate(${x - deltaX}px, ${y - deltaY}px)`;
    this.position.x = x - oX;
    this.position.y = y - oY;
  }
}
