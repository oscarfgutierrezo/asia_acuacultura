import { blowersIndustrial, blowersIndustrialDobleTapa, blowersEjelibre, blowersAcuarios, blowersIndustrialHg, splashOxipez, filtros, discos, alarmas, probioticos, desinfectantes, antibioticos, pruebas } from './data/index.js'

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
  referencia.textContent = `${ref}`

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
  referencia.textContent = `${ref}`

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
  referencia.textContent = `${ref}`

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

/* Blowers Acuarios */

const blowersAcuariosContainerDOM = document.querySelector('#blowers-acuarios')
const blowersAcuariosIndicadoresDOM = document.querySelector('#blowers-acuarios-indicadores')

blowersAcuarios.forEach( (producto, index) => {
  const {ref, potencia, voltaje, kpa, psi, caudal, cfm, entrada, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/BlowerAcuarios.png';
  img.alt = 'Blower Acuarios';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`

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
    voltajeInfo.textContent = `Voltaje ${voltaje}`;
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
    entradaInfo.innerHTML = `Caudal ${caudal} m<sup>3</sup>/h - ${cfm} cfm`;
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
  blowersAcuariosContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  blowersAcuariosIndicadoresDOM.appendChild(indicador);
})

/* Blowers Industrial HG */

const blowersIndustrialHGContainerDOM = document.querySelector('#blowers-industrialesHG')
const blowersIndustrialHGIndicadoresDOM = document.querySelector('#blowers-industrialesHG-indicadores')

blowersIndustrialHg.forEach( (producto, index) => {
  const {ref, potencia, voltaje, kpa, psi, caudal, cfm, entrada, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/BlowerAcuarios.png';
  img.alt = 'Blower Acuarios';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`

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
    voltajeInfo.textContent = `Voltaje ${voltaje}`;
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
    entradaInfo.innerHTML = `Caudal ${caudal} m<sup>3</sup>/h - ${cfm} cfm`;
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
  blowersIndustrialHGContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  blowersIndustrialHGIndicadoresDOM.appendChild(indicador);
})

/* Splash Oxipez */

const splashOxipezContainerDOM = document.querySelector('#splash-oxipez')
const splashOxipezIndicadoresDOM = document.querySelector('#splash-oxipez-indicadores')

splashOxipez.forEach( (producto, index) => {
  const {ref, potencia, voltaje, oxigeno, ltr, metros, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/SplashOxipez.png';
  img.alt = 'Blower Acuarios';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`

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
    voltajeInfo.textContent = `Voltaje ${voltaje}`;
  potenciaContainer.appendChild(potenciaInfo);
  potenciaContainer.appendChild(potenciaDivisor);
  potenciaContainer.appendChild(voltajeInfo);

  /* Oxigeno x Hora */
  const oxigenoInfo = document.createElement('p');
  oxigenoInfo.classList.add('text-center');
  oxigenoInfo.textContent = `Kilogramos de oxígeno por hora: ${oxigeno}`
  
  /* Caudal */
  const caudalInfo = document.createElement('p');
  caudalInfo.classList.add('text-center');
  caudalInfo.innerHTML = `Caudal ${ltr} ltr/min - ${metros} m<sup>3</sup>/h`;
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}"`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia)
  infoContainer.appendChild(potenciaContainer)
  infoContainer.appendChild(oxigenoInfo)
  infoContainer.appendChild(caudalInfo)
  infoContainer.appendChild(precioInfo)

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  splashOxipezContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  splashOxipezIndicadoresDOM.appendChild(indicador);
})

/* Filtros */

const filtrosContainerDOM = document.querySelector('#filtros')
const filtrosIndicadoresDOM = document.querySelector('#filtros-indicadores')

filtros.forEach( (producto, index) => {
  const {ref, entrada, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/filtros.png';
  img.alt = 'Blower Acuarios';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Entrada */
  const entradaInfo = document.createElement('p');
  entradaInfo.classList.add('text-center');
  entradaInfo.textContent = `Entrada rosca hembra: ${entrada}`
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}"`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(entradaInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  filtrosContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  filtrosIndicadoresDOM.appendChild(indicador);
})

/* Discos */

const discosContainerDOM = document.querySelector('#discos')
const discosIndicadoresDOM = document.querySelector('#discos-indicadores')

discos.forEach( (producto, index) => {
  const {ref, diametro, flujo, oxigenacion, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/discos.png';
  img.alt = 'Blower Acuarios';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Diametro Container */
  const diametroContainer = document.createElement('div');
  diametroContainer.classList.add('flex', 'justify-center', 'gap-1');
    const potenciaInfo = document.createElement('p');
    potenciaInfo.classList.add('w-[49%]', 'text-right');
    potenciaInfo.textContent = `Diametro ${diametro}`;
    const potenciaDivisor = document.createElement('div');
    potenciaDivisor.classList.add('border', 'border-secondary');
    const voltajeInfo = document.createElement('p');
    voltajeInfo.classList.add('w-[49%]');
    voltajeInfo.innerHTML = `Flujo de aire ${flujo} m<sup>3</sup>/h`;
  diametroContainer.appendChild(potenciaInfo);
  diametroContainer.appendChild(potenciaDivisor);
  diametroContainer.appendChild(voltajeInfo);

  /* Oxigenacion */
  const oxigenacionInfo = document.createElement('p');
  oxigenacionInfo.classList.add('text-center');
  oxigenacionInfo.innerHTML = `Capacidad de oxigenación: ${oxigenacion} Kg O<sup>2</sup>/H`
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}"`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(diametroContainer);
  infoContainer.appendChild(oxigenacionInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  discosContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  discosIndicadoresDOM.appendChild(indicador);
})

/* Alarmas */

const alarmasContainerDOM = document.querySelector('#alarmas')
const alarmasIndicadoresDOM = document.querySelector('#alarmas-indicadores')

alarmas.forEach( (producto, index) => {
  const {ref, descripcion, voltaje, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/alarmas.png';
  img.alt = 'Alarma de corte de energía';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Descripcion */
  const descripcionInfo = document.createElement('p');
  descripcionInfo.classList.add('text-center');
  descripcionInfo.innerHTML = descripcion

  /* Voltaje */
  const voltajeInfo = document.createElement('p');
  voltajeInfo.classList.add('text-center');
  voltajeInfo.textContent = voltaje
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(descripcionInfo);
  infoContainer.appendChild(voltajeInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  alarmasContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  alarmasIndicadoresDOM.appendChild(indicador);
})

/* Probioticos */

const probioticosContainerDOM = document.querySelector('#probioticos')
const probioticosIndicadoresDOM = document.querySelector('#probioticos-indicadores')

probioticos.forEach( (producto, index) => {
  const {ref, descripcion, cantidad, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/probioticos.png';
  img.alt = 'Alarma de corte de energía';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Descripcion */
  const descripcionInfo = document.createElement('p');
  descripcionInfo.classList.add('text-center');
  descripcionInfo.innerHTML = descripcion

  /* Cantidad */
  const cantidadInfo = document.createElement('p');
  cantidadInfo.classList.add('text-center');
  cantidadInfo.textContent = cantidad
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(descripcionInfo);
  infoContainer.appendChild(cantidadInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  probioticosContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  probioticosIndicadoresDOM.appendChild(indicador);
})

/* Desinfectantes */

const desinfectantesContainerDOM = document.querySelector('#desinfectantes')
const desinfectantesIndicadoresDOM = document.querySelector('#desinfectantes-indicadores')

desinfectantes.forEach( (producto, index) => {
  const {ref, descripcion, cantidad, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/desinfectantes.png';
  img.alt = 'Alarma de corte de energía';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Descripcion */
  const descripcionInfo = document.createElement('p');
  descripcionInfo.classList.add('text-center');
  descripcionInfo.innerHTML = descripcion

  /* Cantidad */
  const cantidadInfo = document.createElement('p');
  cantidadInfo.classList.add('text-center');
  cantidadInfo.textContent = cantidad
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(descripcionInfo);
  infoContainer.appendChild(cantidadInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  desinfectantesContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  desinfectantesIndicadoresDOM.appendChild(indicador);
})

/* Antibióticos */

const antibioticosContainerDOM = document.querySelector('#antibioticos')
const antibioticosIndicadoresDOM = document.querySelector('#antibioticos-indicadores')

antibioticos.forEach( (producto, index) => {
  const {ref, descripcion, cantidad, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/antibioticos.png';
  img.alt = 'Alarma de corte de energía';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Descripcion */
  const descripcionInfo = document.createElement('p');
  descripcionInfo.classList.add('text-center');
  descripcionInfo.innerHTML = descripcion

  /* Cantidad */
  const cantidadInfo = document.createElement('p');
  cantidadInfo.classList.add('text-center');
  cantidadInfo.textContent = cantidad
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(descripcionInfo);
  infoContainer.appendChild(cantidadInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  antibioticosContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  antibioticosIndicadoresDOM.appendChild(indicador);
})

/* Pruebas */

const pruebasContainerDOM = document.querySelector('#pruebas')
const pruebasIndicadoresDOM = document.querySelector('#pruebas-indicadores')

pruebas.forEach( (producto, index) => {
  const {ref, descripcion, parametros, cantidad, precio} = producto;
  const productoContainer = document.createElement('div');
  /* Contenedor */
  productoContainer.classList.add('carousel-item', 'absolute', 'opacity-0', 'h-full', 'w-full', 'object-cover', 'rounded-xl', 'transition-all', 'duration-700');
  if (index === 0) {
    productoContainer.classList.add('active');
  }

  /* Imagen */
  const img = document.createElement('img');
  img.classList.add('mx-auto', 'h-44');
  img.src = './public/images/pruebas.png';
  img.alt = 'Alarma de corte de energía';

  /* Info Contenedor */
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pt-2', 'flex', 'flex-col', 'gap-1', 'text-lg', 'leading-5');

  /* Referencia */
  const referencia = document.createElement('p');
  referencia.classList.add('mx-auto', 'mb-2', 'w-[98%]', 'text-xl', 'text-white', 'text-center', 'bg-secondary-soft', 'rounded-full');
  referencia.textContent = `${ref}`;

  /* Descripcion */
  const descripcionInfo = document.createElement('p');
  descripcionInfo.classList.add('text-center');
  descripcionInfo.innerHTML = descripcion;

  /* Parametros */
  const parametrosInfo = document.createElement('p');
  parametrosInfo.classList.add('text-center');
  parametrosInfo.textContent = `Análsis: ${parametros}`
  
  /* Cantidad */
  const cantidadInfo = document.createElement('p');
  cantidadInfo.classList.add('text-center');
  cantidadInfo.textContent = `Número de pruebas: ${cantidad}`;
  
  /* Precio */
  const precioInfo = document.createElement('p');
  precioInfo.classList.add('text-2xl', 'text-center', 'text-secondary');
  precioInfo.textContent = `$ ${precio}`

  /* Agregar elementos a InfoContainer */
  infoContainer.appendChild(referencia);
  infoContainer.appendChild(descripcionInfo);
  infoContainer.appendChild(parametrosInfo);
  infoContainer.appendChild(cantidadInfo);
  infoContainer.appendChild(precioInfo);

  /* Agregar elementos a Contenedor del producto */
  productoContainer.appendChild(img);
  productoContainer.appendChild(infoContainer);

  /* Agregar elementos al DOM */
  pruebasContainerDOM.appendChild(productoContainer);

  /* Agregar indicadores */
  const indicador = document.createElement('button');
  indicador.classList.add('carousel-indicator', 'h-3', 'w-3', 'rounded-[50%]', 'bg-secondary-soft/50');
  if (index === 0) {
    indicador.classList.add('active');
  }
  pruebasIndicadoresDOM.appendChild(indicador);
})