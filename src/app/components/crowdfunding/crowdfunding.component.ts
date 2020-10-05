import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowdfunding',
  templateUrl: './crowdfunding.component.html',
  styleUrls: ['./crowdfunding.component.scss']
})
export class CrowdfundingComponent implements OnInit {

  progresoInversion = 110;
  nInversores = 38;
  diasFinanciacion = 1;
  dineroRestante = 0;
  dineroContribuido = "42.650";
  dineroObjetivo = "42.650";
  potencia = "0.03";
  rentabilidadAnual = 7.47;
  plazo = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
