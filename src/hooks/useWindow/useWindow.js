import { useEffect, useState } from 'react';

export function useWindow() {
  const [windowZize, setWindowZize] = useState(0);

  const windowWidth = window.innerWidth;
  useEffect(() => {
    setWindowZize(windowWidth);
  }, [windowWidth]);

  return windowZize;
}
