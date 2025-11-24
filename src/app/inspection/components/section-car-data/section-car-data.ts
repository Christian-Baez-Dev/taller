import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import{FormBuilder, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-section-car-data',
  imports: [ReactiveFormsModule],
  templateUrl: './section-car-data.html',
  styleUrl: './section-car-data.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCarData {
  private fb = inject(FormBuilder)

  carDataForm = signal(this.fb.group({
    model: [''],
    noVin: [''],
    mileage: [''],
    alteredMileage: [false],
    isCleanCarfaz: [false],
    isDealer: [false],
    isRebuild: [false],
    origin: ['']
  }))
 }
