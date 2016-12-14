import { Injectable } from '@angular/core';
import {LynxConstants} from "../lynx-constants";

@Injectable()
export class LynxLoggingService {

  constructor() {}

  static Log(description: string, string: string = ''): void {
    if (!LynxConstants.Production) {
      console.log(description, string);
    }
  }

  static Error(description: string, string: string = ''): void {
    if (!LynxConstants.Production) {
      console.error(description, string);
    }
  }
}
