import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'
import './About.scss';
import { urlFor, client } from '../../client'

// const abouts = [
//   { title: 'Pintura', description: 'Pulido de colores lisos, Bicapas y tricapas', imgUrl: images.about01},
//   { title: 'Desabolladura', description: 'Estirado y cuadratura de vehículos.', imgUrl: images.about02},
//   { title: 'Detailing', description: 'Detailing y sanitización', imgUrl: images.about03},
//   { title: 'Fibra', description: 'Reparación de plasticos con Fibra de vidrio', imgUrl:images.about04}
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) =>  setAbouts(data))
  }, []);
  

  return (
    <>
      {/* <h2 className='head-text'>
        Servicio de 
        <span> Desabolladura, Pintura y Detailing</span>
      </h2> */}
  <h2 className="head-text">Tenemos más de <span>20 años</span> <br />  <span>de experiencia</span> en el rubro</h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key= {about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className='bolt-text' style={ {marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={ {marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      
    </>
  )
}

export default AppWrap(About, 'servicios');