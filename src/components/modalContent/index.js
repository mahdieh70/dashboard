import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ModalContent = ({ onClose }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkerPosition([lat, lng]);
  };

  return (
    <div className="w-full h-[400px] flex items-end justify-center rounded-[24px]">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        onClick={handleMapClick}
        
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
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
    </div>
  );
};

export default ModalContent;
