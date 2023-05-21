import React, { useState } from "react";

//icons
import { BsArrowLeft } from "react-icons/bs";

//leaflet
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

//style
import "../modalContent/modalContent.css";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ModalContent = ({ onClose }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkerPosition([lat, lng]);
  };

  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3",
    },
  ];

  const customIcon = new Icon({
    iconUrl:
      "/src/assets/icons/placeholder (1).png",
    iconSize: [38, 38],
  });

  return (
    <>
      <div className="flex items-center gap-[16px] mb-[17px]">
        <div className="flex gap-x-4 w-[80px] h-10 items-center bg-[#B4B4B4] text-white border-none rounded-[18px] text-[14px] px-6 py-6 tracking-[1px] cursor-pointer ">
          <button
            onClick={() => {
              onClose();
            }}
          >
            بستن
          </button>
        </div>
        <div className="flex gap-x-4 w-[164px] h-10 items-center bg-[#EA8E38] text-white border-none rounded-[18px] text-[14px] px-6 py-6 tracking-[1px] cursor-pointer ">
          <button>ثبت موقعیت</button>
          <BsArrowLeft size={22} />
        </div>
      </div>
      <div className="w-full h-[400px] flex items-end justify-center rounded-[24px] flex-col">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          onClick={handleMapClick}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              {" "}
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default ModalContent;
