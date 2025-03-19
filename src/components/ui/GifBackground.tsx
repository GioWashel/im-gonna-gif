import React, { useRef } from 'react';

const GifBackground = React.memo(() => {
    const allGifs = [
        'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.webp',
        'https://media1.tenor.com/m/PLaH0WcAwmEAAAAd/gopher.gif',
        'https://media.tenor.com/T7eqVK6--PkAAAAM/peter-griffin-popular-vibe.gif',
        'https://media.tenor.com/OayVCZ6qCzsAAAAm/oooo-pogfish.webp',
        'https://media.tenor.com/s0wZ_oQcWusAAAAM/cam-minor-inconvenience.gif',
        'https://media.tenor.com/k7SSrU348xQAAAAM/fnaf-the-rock.gif',
        'https://media.tenor.com/kPYEgJs0h9IAAAAM/walter-white-walter-white-meme.gif',
        'https://media.tenor.com/Vc9Fps8tATgAAAA1/monkey-bruh.webp',
        'https://media.tenor.com/4cuLwPXoFBoAAAAM/confused-dog-breaking-fourth-wall.gif',
        'https://media.tenor.com/3K4bgfughfsAAAAM/uh-oh-run-away.gif',
        'https://media1.tenor.com/m/B4GktlEU4O8AAAAd/kawaii-cookies-xd-ally.gif',
        'https://media.tenor.com/QXb2KMxgXM0AAAAj/pepapig-sigma.gif',
        'https://media.tenor.com/j9rWssrknAsAAAAj/sigma.gif',
        'https://media.tenor.com/KoeLKCxVSGAAAAAM/mewing-jawline.gif',
        'https://media1.tenor.com/m/o9b9WZQxohIAAAAd/sigma-rubbersoulgif.gif',
        'https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif',
        'https://media1.tenor.com/m/rUOKT9eCe2kAAAAd/mewing-jawline.gif',
        'https://media.tenor.com/dor8qnEGxCMAAAAj/sigma.gif',
        'https://media1.tenor.com/m/QxAAV-WNpn4AAAAd/gear-24-luffy.gif',
        'https://media1.tenor.com/m/j1j10T4iOakAAAAd/i-saw-what-you-deleted-i-see-you.gif',
        'https://media1.tenor.com/m/JIv6wOdI7FcAAAAC/haktan-gustavo-fring.gif',
        'https://media1.tenor.com/m/PLaH0WcAwmEAAAAd/gopher.gif',
        'https://media1.tenor.com/m/PZHeRn1I9rIAAAAd/euu.gif',
        'https://media1.tenor.com/m/h1wfOhrDbCEAAAAd/weird-cat.gif',
        'https://media1.tenor.com/m/AcDkiJSgdg4AAAAd/d.gif',
        'https://media1.tenor.com/m/h7vcyDmlpJYAAAAd/laughing-laughing-cat.gif',
        'https://media.tenor.com/1DZkaeqzYhYAAAAj/cat-cat-meme.gif',
        'https://media1.tenor.com/m/10h5j3phHgIAAAAC/dancing-cat-dance.gif',
        'https://media.tenor.com/4hyNBpoMx9EAAAAj/cat-kitty.gif',
        'https://media.tenor.com/QUSMUwP4DX4AAAAj/plink-cat-blink.gif',
        'https://media1.tenor.com/m/VuvEw4NsNTgAAAAd/black-guy-dark.gif',
        'https://media1.tenor.com/m/12LJ8PPypfwAAAAC/black-stare.gif',
        'https://media1.tenor.com/m/y4x6gDa2MooAAAAC/mouth-open-meme.gif',
        'https://media1.tenor.com/m/1kAmSXgxjWUAAAAd/black-man-shaking-booty-booty-shake.gif',
        'https://media1.tenor.com/m/1QhTGovPVzUAAAAC/sonfys-shrek.gif',
        'https://media1.tenor.com/m/qsqwmV7R_-oAAAAd/kung-fu-black-guy.gif',
        'https://media1.tenor.com/m/UuEiVk4DmyoAAAAd/sad-crying-black-guy.gif',
        'https://media1.tenor.com/m/GZ6Tfa7FqJgAAAAd/kanye-west.gif',
        'https://media1.tenor.com/m/1HTrLTSaWrcAAAAd/ye.gif',
        'https://media1.tenor.com/m/Aj-CBbOwhvEAAAAd/dj-khaled-dance.gif',
        'https://media1.tenor.com/m/GYN8AgO9O2cAAAAC/godzilla-slide.gif',
        'https://media1.tenor.com/m/pU8AStoeMHUAAAAd/peeguu-peeguutv.gif',
        'https://media.tenor.com/uKN-jFiiUa0AAAAj/get-real.gif',
        'https://media1.tenor.com/m/hCCk5quWEUQAAAAC/dog.gif',
        'https://media1.tenor.com/m/QD_7pt8rOc0AAAAd/pee-panicking.gif',
        'https://media1.tenor.com/m/ydwrHBXZ8NcAAAAd/nostalgia-critic-doug-walker.gif',
        'https://media1.tenor.com/m/92iUYSlws-oAAAAd/doug-walker-nostalgia-critic.gif',
        'https://media.tenor.com/r8QaTDj3U6IAAAAi/nyan-cat-poptart-cat.gif',
        'https://media1.tenor.com/m/LNsDP78y1REAAAAd/manatee.gif',
        'https://media1.tenor.com/m/m3OTFYnAigAAAAAC/griffin-family-guy.gif',
        'https://media.tenor.com/VsvKqGMkC8EAAAAi/sigma-chicken-sigma.gif',
        'https://media.tenor.com/z0MjBi7_nzwAAAAi/ilya-sigma.gif',
        'https://media.tenor.com/DLK3NlzfgskAAAAi/nice-sigma.gif',
        'https://media.tenor.com/UK9G42ByYosAAAAi/chad-meme.gif',
        'https://media.tenor.com/cnhK5mW2tlcAAAAi/jesse-cat.gif',
        'https://media1.tenor.com/m/IluiN13oSycAAAAC/celosa.gif',
        'https://gifsec.com/wp-content/uploads/2022/10/cute-anime-girl-11.gif'];

        const backgroundGifs = useRef<string[]>(
            allGifs
              .sort(() => Math.random() - 0.5) // Shuffle the array
              .slice(0, 40) // Take the first 40 GIFs
          );

  return (
    <div className="gif-background">
      {backgroundGifs.current.map((gif, index) => (
        <img
          key={index}
          src={gif}
          className="gif"
          alt={`GIF ${index}`}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: 'auto',
            zIndex: Math.random() * -1,
            borderRadius: 10,

          }}
        />
      ))}
    </div>
  );
});

export default GifBackground;