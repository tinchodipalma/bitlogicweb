import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import ServiceItem from './ServiceItem';
import IsotipoBitlogic from '../../images/isotipo.png';
import './ServicesPage.css';

const SERVICES_ITEMS = [
  {
    title: 'Devops',
    description:
      'Nuestro equipo es experto en infraestructura programable para la creación y automatización de entornos de desarrollo y producción para aplicaciones altamente escalables.',
  },
  {
    title: 'Microservicios',
    description:
      'Nos centramos en diseñar el escenario adecuado para migrar aplicaciones existentes o nuevas a una arquitectura de microservicios escalable.',
  },
  {
    title: 'Aprendizaje automático',
    description:
      'Creamos herramientas de aprendizaje automático que pueden extraer información valiosa para el negocio a partir de big data.',
  },
];

const ServicesPage = () => (
  <Default className="ServicesPage ServicesPage__Container">
    <SEO title="Services" />

    <h1 className="ServicesPage__Title">
      Nos gusta desafiar a la tecnología con cada uno de nuestros servicios.
    </h1>
    <div className="ServicesPage__Content">
      {SERVICES_ITEMS.map(({ title, description }, i) => (
        <ServiceItem title={title} key={i}>
          {description}
        </ServiceItem>
      ))}
      <div className="ServicesPage__Image">
        <img src={IsotipoBitlogic} alt="bitlogic" />
      </div>
    </div>
  </Default>
);

export default ServicesPage;
