import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorteService {

  private readonly API = 'api/cortes';

  constructor() { }
}
