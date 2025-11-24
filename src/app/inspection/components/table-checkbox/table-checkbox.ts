import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OptionModel, TableCheckboxModel } from '../../../shared/interfaces/form-interfaces';

@Component({
  selector: 'app-table-checkbox',
  imports: [],
  templateUrl: './table-checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCheckbox {
  data = input.required<TableCheckboxModel>()


  selectValue(row: OptionModel, value: any){
    row.value =  value
  }

}
