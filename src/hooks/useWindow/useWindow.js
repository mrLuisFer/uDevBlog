import {useEffect, useState} from 'react';

export function useWindow() {
  const [windowZize, setWindowZize] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWindowZize(windowWidth);
  }, []);

  return windowZize;
}
