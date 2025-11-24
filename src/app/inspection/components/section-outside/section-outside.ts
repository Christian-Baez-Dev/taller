import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HorizontalRadios } from "../../../shared/components/horizontal-radios/horizontal-radios";

@Component({
  selector: 'app-section-outside',
  imports: [HorizontalRadios],
  templateUrl: './section-outside.html',
  styleUrl: './section-outside.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionOutside { }
