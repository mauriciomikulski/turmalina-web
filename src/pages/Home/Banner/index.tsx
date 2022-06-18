import './style.scss'
import banner from '../../../assets/img/banners';
import { useEffect, useState } from 'react';

const Banner = () => {

  const [bannerImg, setBannerImg] = useState(banner[0]);
  const [bannerIndex, setBannerIndex] = useState(0);

  const changeBanner = (index: number) => {
    setBannerImg(banner[index]);
    setBannerIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const index = banner.indexOf(bannerImg) + 1;
      if (index === banner.length) {
        setBannerImg(banner[0]);
        changeBanner(0);
      } else {
        changeBanner(index);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImg]);

  return (
    
    <div className="banner">
      <img src={bannerImg} />
      <ul className="dotItem">
        {banner.map((item, index) => {
          return (
            <li key={index} className={bannerIndex === index ? 'active' : ''} onClick={() => changeBanner(index)}></li>
          )
        }
        )}
        
      </ul>
    </div>
  );
}

export default Banner;