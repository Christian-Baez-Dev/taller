export interface TableCheckboxModel {
  columns: OptionModel[],
  rows: OptionModel[]
}

export interface OptionModel{
  name: string,
  label: string,
  value?: any
}
