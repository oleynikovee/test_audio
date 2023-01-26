import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  audio=new Audio();
  playAudio() {
      this.audio.src = `assets/audio.ogg`;
      this.audio.load();
      this.audio.play().then();
    }

  playAudiomp3() {
      this.audio.src = `assets/audio.mp3`;
      this.audio.load();
      this.audio.play().then();

  }
}
