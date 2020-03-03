import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = '';
  insertPost = '¿Quieres decirme algo?'

  onAddPost(){
    this.newPost = 'Ala, tu mensaje de mierda se envio... ¿ves como hago los deberes?. Despacito pero sin pausa';

    this.insertPost = 'PUES NI ME HABLES, QUE ME TENEIS SUPER VIGILADA COÑE'
  }
}
