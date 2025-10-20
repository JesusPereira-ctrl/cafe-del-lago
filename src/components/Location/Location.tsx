import { useEffect, useRef } from 'react';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MiniHeaderSection } from '@/shared/MiniHeaderSection';

// Configurar iconos por defecto (evita íconos rotos en bundlers)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Location = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const position: LatLngExpression = [-40.1958605, -72.2574454];

    // Crear mapa
    const map = L.map(mapContainerRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      center: position as [number, number],
      zoom: 15,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(position)
      .addTo(map)
      .bindPopup(
        `<div style="text-align:center">
        <strong style="font-family: 'Playfair Display', serif; font-size: 1rem;">Café del Lago</strong><br/>
        <span style="font-size: 0.85rem;">Av. del Lago 123</span>
      </div>`
      );

    mapRef.current = map;

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section id='ubicacion' className='section-padding bg-muted'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16 animate-fade-in'>
          <MiniHeaderSection
            title='Encuéntranos'
            subtitle='Visitanos en nuestra ubicación junto al lago'
          ></MiniHeaderSection>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6'>
            <div className='bg-card p-8 rounded-lg border border-border'>
              <h3 className='font-serif text-2xl font-semibold text-primary mb-4'>
                Dirección
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                Calle Principal S/N
                <br />
                Llifén, 5180000
                <br />
                Futrono, Los Ríos
                <br />
                Chile
              </p>
            </div>

            <div className='bg-card p-8 rounded-lg border border-border'>
              <h3 className='font-serif text-2xl font-semibold text-primary mb-4'>
                Horario de Atención
              </h3>
              <div className='space-y-2 text-muted-foreground'>
                <div className='flex justify-between'>
                  <span>Lunes:</span>
                  <span className='font-medium text-destructive'>Cerrado</span>
                </div>
                <div className='flex justify-between'>
                  <span>Temporada alta:</span>
                  <span className='font-medium'>9:30 - 21:00</span>
                </div>
                <div className='flex justify-between'>
                  <span>Temporada baja:</span>
                  <span className='font-medium'>09:30 - 19:30</span>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='h-[500px] rounded-lg overflow-hidden shadow-lg border border-border relative z-0'>
              <div ref={mapContainerRef} className='h-full w-full' />
            </div>
            <a
              href='https://www.google.com/maps/place/cafe+del+lago/@-40.1960919,-72.2600907,17.25z/data=!4m6!3m5!1s0x9616bf057ef4ce53:0xae304ea09d360e9e!8m2!3d-40.1958605!4d-72.2574454!16s%2Fg%2F11g_x8h1xs?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors w-full'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
