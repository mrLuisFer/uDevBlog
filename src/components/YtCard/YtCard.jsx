import React, {useState} from 'react';
import channelsData from './_channels.json';
// Assets
import ytCardIcon from '../../assets/ytCard/yt-card-icon.svg';

export default function YtCard() {
  const [channelIndex, setchannelIndex] = useState(0);

  const channel = channelsData[channelIndex];

  // Esto suma 1 para que el index del array de los channels
  const handleSumIndex = () => {
    if (channelsData.length > channelIndex) {
      setchannelIndex(channelIndex + 1);
    } else {
      setchannelIndex(0);
    }
  };

  // Esto resta 1 al index para que regrese a una pocision anterior
  const handleSubsIndex = () => {
    if (channelsData.length < channelIndex) {
      setchannelIndex(channelIndex - 1);
    } else {
      setchannelIndex(0);
    }
  };

  return (
    <div className='YtCard'>
      <span onClick={handleSubsIndex} className='YtCard__arrow'>
        <i className='fas fa-angle-left'></i>
      </span>
      <div className='YtCard__container'>
        <div className='YtCard__container-profile'>
          <img
            src={channel?.avatar}
            alt={channel?.title}
            className='YtCard__container__avatar'
          />
          <h3 className='YtCard__container__title'>{channel?.title}</h3>
        </div>
        <a
          className='YtCard__container__link'
          href={channel?.link}
          target='_blank'
          rel='noreferrer'
        >
          <img src={ytCardIcon} />
          Suscribirse!
        </a>
      </div>
      <span onClick={handleSumIndex} className='YtCard__arrow'>
        <i className='fas fa-angle-right'></i>
      </span>
    </div>
  );
}
