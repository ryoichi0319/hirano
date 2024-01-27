"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Disc {
  id: string;
  title: string;
  release_date: string;
  image_url: string;
  songs: string[];
}

const Disc = () => {
  const [data, setData] = useState<Disc[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://hirano.vercel.app/api/disc", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        setData(data.albums);
      })
      .finally(() => setLoading(false));

}, []); 


  return (
    <div className="max-w-5xl mx-auto ">
        <h1 className="mb-12 font-thin text-gray-500 text-6xl pt-7 md:ml-16 ml-5">
            Discography</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((album) => (
            <div key={album.id} className='text-center  mb-5'>
              <h2 className='text-2xl font-bold'>{album.title}</h2>
              <p className=' '>Release: {album.release_date}</p>
              <Link href={`/discography/${album.id}`}>
              <div className='mx-auto md:w-full overflow-hidden rounded-md'>
              <Image
                    src={album.image_url }
                    alt=''
                    width={200}
                    height={200}
                    
                 
                    
                    className="object-cover transition-all hover:scale-105 hover:rounded-md mx-auto"
                    />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
   );
};

export default Disc;
