"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ícone criado explicitamente com anchorPoint correto
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],      // tamanho padrão do marker
  iconAnchor: [12, 41],    // ponto do ícone que corresponde à coordenada (base do pin)
  popupAnchor: [1, -34],   // onde o popup abre em relação ao iconAnchor
  shadowSize: [41, 41],
});

interface Praias {
  id: string;
  nome: string;
  coords: [number, number];
}

interface InteractiveMapProps {
  onSelecionarPraia: (id: string) => void;
}

const listapraias: Praias[] = [
  {id:"sepultura", nome:"Praia da Sepultura", coords:[-27.141600124053625, -48.47782295826987]},
  {id:"cantograndedentro", nome:"Canto Grande (Dentro)", coords:[-27.196933816760943, -48.50073804067316]},
  {id:"cantograndefora", nome:"Canto Grande (Fora)", coords:[-27.194538731419524, -48.49717960943676]},
  {id:"quatroilhas", nome:"Quatro Ilhas", coords:[-27.155396982336235, -48.48413828988905]},
  {id:"retiro", nome:"Retiro dos Padres", coords: [-27.14546847519956, -48.47581271260816]},
  {id: "lagoinha", nome:"Praia da Lagoinha", coords: [-27.14546847519956, -48.48079089269203]},
  {id: "mariscal", nome: "Praia de Mariscal", coords: [-27.18021438921008, -48.50001696689765] },
  { id: "bombinhas", nome: "Praia de Bombinhas (Centro)", coords: [-27.147988872110396, -48.48825816236639] },
  { id: "bombas", nome: "Praia de Bombas", coords: [-27.140580270933334, -48.50808505203702] },
];

const limitesBombinhas: [[number, number], [number, number]] = [
  [-27.2200, -48.6000],
  [-27.0800, -48.4000],
];

export default function InteractiveMap({ onSelecionarPraia }: InteractiveMapProps) {
  return (
    <MapContainer
      center={[-27.1350, -48.5000]}
      zoom={14}
      maxBounds={limitesBombinhas}
      maxBoundsViscosity={1.0}
      minZoom={12}
      maxZoom={18} // ⚠️ você tinha maxZoom={12} igual ao minZoom, trava o zoom
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {listapraias.map((praia) => (
        <Marker key={praia.id} position={praia.coords} icon={markerIcon}
          eventHandlers={{
            click: () => {
              onSelecionarPraia(praia.id);
            },
          }}
          >
          <Popup>
            <span className="font-bold">{praia.nome}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}