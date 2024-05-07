import { Howl } from 'howler';

const sound = { 
    playCoin: () => { 
        const music = new Howl({ 
            src: ['/coin.mp3']
        });

        music.play();
    }
};

export default sound;