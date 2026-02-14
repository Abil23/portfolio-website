import React from 'react';

const HeroImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Garis kode di bawah ini menggantikan SVG lama dengan link gambar kamu.
        Saya menambahkan object-contain agar rasio foto tetap terjaga.
      */}
      <img 
        src="https://i.ibb.co.com/0V6Ck7HJ/IMG-20260211-161641-332-removebg-preview-1-1-removebg-preview.png" 
        alt="Irsyad Portrait" 
        className="w-full h-auto max-w-md object-contain drop-shadow-2xl"
      />
    </div>
  );
};

export default HeroImage;