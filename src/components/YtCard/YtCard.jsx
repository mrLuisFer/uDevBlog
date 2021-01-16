import React, { useState } from 'react';
// Channels
import channelsData from './_channels.json';
// Assets
import ytAvatar from '../../assets/ytCard/avatar-min.png';

export default function YtCard() {
  const [channelIndex, setChannelIndex] = useState(0);

  const channel = channelsData[channelIndex];

  // Esto suma 1 para que el index del array de los channels
  const handleSumIndex = () => {
    if (channelsData.length - 1 > channelIndex) {
      setChannelIndex(channelIndex + 1);
    } else {
      setChannelIndex(0);
    }
  };

  // Esto resta 1 al index para que regrese a una pocision anterior
  const handleSubsIndex = () => {
    // El -1 hace que se regrese a una pocision anterior y no se salte todo
    // Y regrese al index anterior
    if (channelIndex === 0) return setChannelIndex(channelsData.length);
    setChannelIndex(channelIndex - 1);
  };

  return (
    <>
      <h1 className='YtCard__title'>Conocer mas!</h1>
      <div className='YtCard'>
        <span onClick={handleSubsIndex} className='YtCard__arrow'>
          <i className='fas fa-angle-left'></i>
        </span>
        <div className='YtCard__container'>
          <div className='YtCard__container-profile'>
            <img
              src={
                channel === undefined || channel === null
                  ? ytAvatar
                  : channel?.avatar
              }
              alt={channel?.title}
              className='YtCard__container__avatar'
            />
            <h3 className='YtCard__container__title'>
              {channel === undefined || channel === null
                ? 'No Youtuber'
                : channel?.title}
            </h3>
          </div>
          <a
            className={
              channel === undefined || channel === null
                ? 'YtCard__container__no-active'
                : 'YtCard__container__active'
            }
            id='YtCard__link'
            href={channel?.link}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-youtube'></i>
            Suscribirse!
          </a>
        </div>
        <span onClick={handleSumIndex} className='YtCard__arrow'>
          <i className='fas fa-angle-right'></i>
        </span>
      </div>
    </>
  );
}
