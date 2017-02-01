import { Injectable } from '@angular/core';
import {LynxConstants} from "../lynx-constants";

@Injectable()
export class LynxLoggingService {

  constructor() {}

  static Log(description: string, element: any = ''): void {
    if (!LynxConstants.Production) {
      console.log(description, element);
    }
  }

  static Error(description: string, element: any = ''): void {
    if (!LynxConstants.Production) {
      console.error(description, element);
    }
  }
}
