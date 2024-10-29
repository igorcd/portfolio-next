import { Rect } from "@/core/interfaces/rect";

export interface WindowStateConstructor {
  loading: boolean;
  maximized: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
}

export class WindowState {
  readonly loading: boolean;
  readonly maximized: boolean;
  readonly width: number;
  readonly height: number;
  readonly x: number;
  readonly y: number;

  constructor(data: WindowStateConstructor) {
    this.loading = data.loading;
    this.maximized = data.maximized;
    this.width = data.width;
    this.height = data.height;
    this.x = data.x;
    this.y = data.y;
  }

  getRect(): Rect {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  setRect(data: Partial<Rect>) {
    return new WindowState({
      ...this,
      x: data.x ?? this.x,
      y: data.y ?? this.y,
      width: data.width ?? this.width,
      height: data.height ?? this.height,
    });
  }

  static new(index: number, startsMaximized: boolean): WindowState {
    return new WindowState({
      loading: true,
      maximized: startsMaximized,
      width: window.innerWidth <= 1536 ? 700 : 870,
      height: window.innerWidth <= 1536 ? 400 : 520,
      x: 150 + 15 * index,
      y: 100 + 15 * index,
    });
  }
}
