import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableCheckbox } from "../../components/table-checkbox/table-checkbox";
import { TableCheckboxModel } from '../../../shared/interfaces/form-interfaces';
import { SectionCarData } from "../../components/section-car-data/section-car-data";
import { SectionForm } from "../../../shared/components/section-form/section-form";
import { SectionOutside } from "../../components/section-outside/section-outside";
import { HorizontalRadios } from "../../../shared/components/horizontal-radios/horizontal-radios";

@Component({
  selector: 'app-inspection-form-page',
  imports: [SectionCarData, SectionForm, SectionOutside, HorizontalRadios],
  templateUrl: './inspection-form-page.html',
  styleUrl: './inspection-form-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InspectionFormPage {
  dataMock: TableCheckboxModel = {
    columns: [
      {
        name: 'bueno',
        label: 'Bueno',
        value:1
      },
      {
        name: 'muy_bueno',
        label: 'Muy Bueno',
        value:2
      },
      {
        name: 'excelente',
        label: 'Excelente',
        value:3
      },
    ],
    rows: [
      {
        name: 'hola',
        label: 'Hola'
      },
      {
        name: 'hola',
        label: 'Hola'
      },
      {
        name: 'hola',
        label: 'Hola'
      },
      {
        name: 'hola',
        label: 'Hola'
      },
    ]
  }
}
