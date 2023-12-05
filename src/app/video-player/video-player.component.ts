import { YouTubePlayerModule } from '@angular/youtube-player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',    
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
