import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ClimaCiudad = ({ ciudad, apiKey }) => {
  const [temperatura, setTemperatura] = useState(null);

  useEffect(() => {
    const obtenerTemperatura = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          setTemperatura(data.main.temp);
        } else {
          throw new Error('Error al obtener la temperatura');
        }
      } catch (error) {
        console.error(error);
      }
    };

    obtenerTemperatura();
  }, [ciudad, apiKey]);

  

 return (
    <div className="ClimaCiudad">
      {temperatura !== null ? (
        <>
          <p className="temperatura">Temperatura actual: {temperatura}°C</p>
          <p className="ciudad">Ciudad: {ciudad}</p>
          {temperatura > 30 && <p className="mensaje">Hace mucho calor</p>}
          {temperatura < 10 && <p className="mensaje">Hace mucho frío</p>}
        </>
      ) : (
        <p className="loading">Cargando...</p>
      )}
    </div>
  );
};

ClimaCiudad.propTypes = {
  ciudad: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired
};

export default ClimaCiudad;