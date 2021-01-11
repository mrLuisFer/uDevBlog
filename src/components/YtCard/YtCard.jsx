import React, {useEffect} from 'react';

export default function YtCard() {
  const channels = [
    'UCOD6LXgeBoeiUZTsPLdG-0g',
    'UCw05fUBPwmpu-ehXFMqfdMw',
    'UCne4X8czEkhh8GPRjXBIQJw',
    'UCNhumBIUSP9G0O5DBoWSHVg',
  ];

  // Esto hace la llamada a la url de google
  // y hace que funcione el button de youtube
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className='YtCard'>
      <div
        className='g-ytsubscribe'
        // Este es el id del canal que cambiara de manera dinamica
        // Esa pagina te da el id del canal que quieras colocar
        // https://commentpicker.com/youtube-channel-id.php
        data-channelid={channels[0]}
        data-layout='full'
        data-count='hidden'
      ></div>
    </div>
  );
}
