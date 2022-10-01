import { useEffect, useState } from 'react';

export const useHostName = () => {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setHostname(window.location.origin);
  }, []);

  return hostname;
};
