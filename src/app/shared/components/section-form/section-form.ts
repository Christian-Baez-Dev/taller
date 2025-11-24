import { NgClass } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-section-form',
  imports: [NgClass],
  templateUrl: './section-form.html',
  styleUrl: './section-form.css',
})
export class SectionForm {
  title = input('Titulo')
  isOpenInput = input<boolean>(true)

  efecto = effect(() =>{
    this.isOpen.set(this.isOpenInput())
  })
  isOpen = signal<boolean>(true)
  subtitle = input('')


  toggleOpen(){
    console.log('toggle')
    this.isOpen.set(!this.isOpen())
    console.log(this.isOpen())
  }
}
