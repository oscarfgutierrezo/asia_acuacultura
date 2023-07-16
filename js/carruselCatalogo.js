import { blowersIndustrial, blowersIndustrialDobleTapa, blowersEjelibre } from './data/index.js'

/* Blowers Industriales Monofase */

const blowersIndustrialContainerDOM = document.querySelector('#blowers-industriales')
const blowersIndustrialIndicadoresDOM = document.querySelector('#blowers-industriales-indicadores')

blowersIndustrial.forEach( (producto, index) => {
  const {ref, potencia, voltajeMin, voltajeMax, kpa, psi, caudal, cfm, entrada, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/BlowerIndustrial.png';
  img.alt = 'Blower Industrial';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `2RB ${ref}`

  /* Potencia Container */
  const potenciaContainer = document.createElement('div');
  potenciaContainer.classList.add('flex', 'justify-center', 'gap-1');
    const potenciaInfo = document.createElement('p');
    potenciaInfo.classList.add('w-[49%]', 'text-right');
    potenciaInfo.textContent = `Potencia ${potencia}`;
    const potenciaDivisor = document.createElement('div');
    potenciaDivisor.classList.add('border', 'border-secondary');
    const voltajeInfo = document.createElement('p');
    voltajeInfo.classList.add('w-[49%]');
    voltajeInfo.textContent = `voltaje ${voltajeMin}/${voltajeMax}`;
  potenciaContainer.appendChild(potenciaInfo);
  potenciaContainer.appendChild(potenciaDivisor);
  potenciaContainer.appendChild(voltajeInfo);

  /* Presion Container */
  const presionContainer = document.createElement('div');
  presionContainer.classList.add('flex', 'justify-center', 'gap-1');
    const presionInfo = document.createElement('p');
    presionInfo.classList.add('w-[49%]', 'text-right');
    presionInfo.textContent = `Presión ${kpa} kpa - ${psi} psi`;
    const presionDivisor = document.createElement('div');
    presionDivisor.classList.add('border', 'border-secondary');
    const entradaInfo = document.createElement('p');
    entradaInfo.classList.add('w-[49%]');
    entradaInfo.innerHTML = `Caudal ${caudal} m<sup>3</sup>/h - ${cfm} cfm</p>`;
  presionContainer.appendChild(presionInfo);
  presionContainer.appendChild(presionDivisor);
  presionContainer.appendChild(entradaInfo);

  /* Entrada salida info */
  const entradaSalidaInfo = document.createElement('p');
  entradaSalidaInfo.classList.add('text-center');
  entradaSalidaInfo.textContent = `Entrada/Salida ${entrada}"`
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}"`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia)
  infoContainer.appendChild(potenciaContainer)
  infoContainer.appendChild(presionContainer)
  infoContainer.appendChild(entradaSalidaInfo)
  infoContainer.appendChild(precioInfo)

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  blowersIndustrialContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  blowersIndustrialIndicadoresDOM.appendChild(indicador);
})

/* Blowers Industriales Doble Tapa */

const blowersIndustrialDobleContainerDOM = document.querySelector('#blowers-industriales-dobletapa')
const blowersIndustrialDobleIndicadoresDOM = document.querySelector('#blowers-industriales-dobletapa-indicadores')

blowersIndustrialDobleTapa.forEach( (producto, index) => {
  const {ref, potencia, voltajeMin, voltajeMax, kpa, psi, caudal, cfm, entrada, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/BlowerIndustrialDoble.png';
  img.alt = 'Blower Industrial Doble Tapa';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `2RB ${ref}`

  /* Potencia Container */
  const potenciaContainer = document.createElement('div');
  potenciaContainer.classList.add('flex', 'justify-center', 'gap-1');
    const potenciaInfo = document.createElement('p');
    potenciaInfo.classList.add('w-[49%]', 'text-right');
    potenciaInfo.textContent = `Potencia ${potencia}`;
    const potenciaDivisor = document.createElement('div');
    potenciaDivisor.classList.add('border', 'border-secondary');
    const voltajeInfo = document.createElement('p');
    voltajeInfo.classList.add('w-[49%]');
    voltajeInfo.textContent = `voltaje ${voltajeMin}/${voltajeMax}`;
  potenciaContainer.appendChild(potenciaInfo);
  potenciaContainer.appendChild(potenciaDivisor);
  potenciaContainer.appendChild(voltajeInfo);

  /* Presion Container */
  const presionContainer = document.createElement('div');
  presionContainer.classList.add('flex', 'justify-center', 'gap-1');
    const presionInfo = document.createElement('p');
    presionInfo.classList.add('w-[49%]', 'text-right');
    presionInfo.textContent = `Presión ${kpa} kpa - ${psi} psi`;
    const presionDivisor = document.createElement('div');
    presionDivisor.classList.add('border', 'border-secondary');
    const entradaInfo = document.createElement('p');
    entradaInfo.classList.add('w-[49%]');
    entradaInfo.innerHTML = `Caudal ${caudal} m<sup>3</sup>/h - ${cfm} cfm</p>`;
  presionContainer.appendChild(presionInfo);
  presionContainer.appendChild(presionDivisor);
  presionContainer.appendChild(entradaInfo);

  /* Entrada salida info */
  const entradaSalidaInfo = document.createElement('p');
  entradaSalidaInfo.classList.add('text-center');
  entradaSalidaInfo.textContent = `Entrada/Salida ${entrada}"`
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}"`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia)
  infoContainer.appendChild(potenciaContainer)
  infoContainer.appendChild(presionContainer)
  infoContainer.appendChild(entradaSalidaInfo)
  infoContainer.appendChild(precioInfo)

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  blowersIndustrialDobleContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  blowersIndustrialDobleIndicadoresDOM.appendChild(indicador);
})

/* Blowers Industriales Eje Libre */

const blowersIndustrialEjelibreContainerDOM = document.querySelector('#blowers-ejelibre')
const blowersIndustrialEjelibreIndicadoresDOM = document.querySelector('#blowers-ejelibre-indicadores')

blowersEjelibre.forEach( (producto, index) => {
  const {ref, rpm, potencia, kpa, psi, caudal, entrada, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/BlowerEjeLibre.png';
  img.alt = 'Blower Eje Libre';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `2RB ${ref}`

  /* Potencia Container */
  const potenciaContainer = document.createElement('div');
  potenciaContainer.classList.add('flex', 'justify-center', 'gap-1');
    const potenciaInfo = document.createElement('p');
    potenciaInfo.classList.add('w-[49%]', 'text-right');
    potenciaInfo.textContent = `RPM ${rpm}`;
    const potenciaDivisor = document.createElement('div');
    potenciaDivisor.classList.add('border', 'border-secondary');
    const voltajeInfo = document.createElement('p');
    voltajeInfo.classList.add('w-[49%]');
    voltajeInfo.textContent = `Potencia ${potencia} HP`;
  potenciaContainer.appendChild(potenciaInfo);
  potenciaContainer.appendChild(potenciaDivisor);
  potenciaContainer.appendChild(voltajeInfo);

  /* Presion Container */
  const presionContainer = document.createElement('div');
  presionContainer.classList.add('flex', 'justify-center', 'gap-1');
    const presionInfo = document.createElement('p');
    presionInfo.classList.add('w-[49%]', 'text-right');
    presionInfo.textContent = `Presión ${kpa} kpa - ${psi} psi`;
    const presionDivisor = document.createElement('div');
    presionDivisor.classList.add('border', 'border-secondary');
    const entradaInfo = document.createElement('p');
    entradaInfo.classList.add('w-[49%]');
    entradaInfo.innerHTML = `Caudal ${caudal} m<sup>3</sup>/h`;
  presionContainer.appendChild(presionInfo);
  presionContainer.appendChild(presionDivisor);
  presionContainer.appendChild(entradaInfo);

  /* Entrada salida info */
  const entradaSalidaInfo = document.createElement('p');
  entradaSalidaInfo.classList.add('text-center');
  entradaSalidaInfo.textContent = `Entrada/Salida ${entrada}"`
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}"`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia)
  infoContainer.appendChild(potenciaContainer)
  infoContainer.appendChild(presionContainer)
  infoContainer.appendChild(entradaSalidaInfo)
  infoContainer.appendChild(precioInfo)

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  blowersIndustrialEjelibreContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  blowersIndustrialEjelibreIndicadoresDOM.appendChild(indicador);
})
