import { ListImages } from './ListImages.jsx';
import { useEffect, useState } from 'react';

export const App = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ACCESS_KEY = 'Y7SJTq_MikoEgy0u_Z2OIdHmAcWrXrfx-R9w-9l1X2g';
    fetch(`https://api.unsplash.com/photos`, {
      headers: {
        'Authorization': `Client-ID ${ACCESS_KEY}`,
      },
    }).then((res) => res.json()).then((res) => setItems(res));
  }, []);

  return (
    <div className="container">
      <ListImages items={items} />
    </div>
  );
};