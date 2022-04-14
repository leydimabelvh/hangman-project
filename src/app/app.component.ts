 import { Component } from '@angular/core';

 //Decorador: Agrega funcionalidades a la clase de forma externa.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'hangman-game';
  
//Definicion de string que se adivinará
word = 'SERENDIPIA';
hiddenWord= '';

tries = 0;

win = false;
lose = false;

//Arreglo con todas las letras del abecedario
letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];




  //Función que se ejecuta primero cuando se crea una nueva instancia de la clase AppComponent
  constructor () {
    this.hiddenWord = '_ '.repeat(this.word.length);
  }

  check( letter: string ) {

    this.thereLetter (letter);
    const hiddenWordArr = this.hiddenWord.split(' ');
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        hiddenWordArr[i] = letter;        
      }
    }

    this.hiddenWord = hiddenWordArr.join(' ');
    this.verifyStatus();

  }


  verifyStatus () {
    const wordArr = this.hiddenWord.split(' ');
    const wordEvaluate = wordArr.join('');

    if (wordEvaluate === this.word) {
      this.win = true;
      console.log('GANA');
    }

    if (this.tries >= 9) {
      this.lose = true;
      console.log('PIERDE');
    }

  }


  thereLetter(letter: string) {
    if (this.word.indexOf(letter) >= 0) {
      // console.log('Existe la letra ' + letter);
    } else {
      // console.log('NO existe la letra ' + letter);
      this.tries ++;
    }
  }



}
