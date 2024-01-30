import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const currentTime = throttle(timeupdate => {
  localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
}, 1000);

player.on('timeupdate', currentTime);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}
