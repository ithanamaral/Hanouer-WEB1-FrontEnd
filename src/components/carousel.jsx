import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './carousel.css';
import Foto22 from '../assets/Foto22.jpeg';
import Foto26 from '../assets/Foto26.jpeg';
import Foto28 from '../assets/Foto28.jpeg';
import Foto1 from '../assets/Foto1.jpeg';

const Carousel = () => {
  const imagens = [
    { id: 1, url: Foto22, texto: 'Bem-vindos à PIBARE' },
    { id: 2, url: Foto26, texto: 'Cultos todos os Domingos' },
    { id: 3, url: Foto28, texto: 'Venha fazer parte da nossa família' },
    { id: 4, url: Foto1, texto: 'Deus tem um propósito para você' },
  ];

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {imagens.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-item">
              <img src={item.url} alt={item.texto} />
              <div className="slide-caption">
                <h2>{item.texto}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;