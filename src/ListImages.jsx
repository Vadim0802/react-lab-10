import { useEffect, useState } from 'react';
import { Image } from './Image.jsx';

export const ListImages = ({ items }) => {
  const [isSlideShow, setStateSlide] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(0);

  useEffect(() => {
    if (isSlideShow) {
      setTimeout(() => {
        currentPicture === items.length - 1 ?
          setCurrentPicture(0) :
          setCurrentPicture(currentPicture + 1);
      }, 2000);
    }
  }, [currentPicture, isSlideShow, items]);

  return (
    <div className="mx-3 my-3">
      <button className="btn btn-primary" onClick={() => setStateSlide(!isSlideShow)}>
        { isSlideShow ? 'Выключить' : 'Включить'  } режим слайд-шоу
      </button>
      <div className="d-flex flex-wrap">
        { !isSlideShow
        ? items.map((item, index) => (
            <Image key={index} urlImage={item.urls.small} />
          ))
        : <Image urlImage={items[currentPicture].urls.small} />
      }
      </div>
    </div>
  );
};