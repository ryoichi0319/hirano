"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Disc {
  id: string;
  title: string;
  release_date: string;
  image_url: string;
  songs: string[];
}

interface DiscDetailProps {
  postId: string;
}

const DiscDetail: React.FC<DiscDetailProps> = ({ postId }) => {
  const [data, setData] = useState<Disc[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3000/api/disc", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        // postId に合致するアルバムだけを選別して setData で更新
        const filteredAlbums = data.albums.filter((album:Disc ) => album.id === postId);
        setData(filteredAlbums)
      })
      .finally(() => setLoading(false))
  }, [postId]);

  return (
    <div className="max-w-5xl mx-auto mt-8 ">
          <h1 className="mb-12 font-thin text-gray-500 text-6xl pt-7 md:ml-16 ml-5">
            Discography</h1>   
         <ul className=' gap-10 text-left text-slate-700'>
            {data.map((album) => (
              <div key={album.id}>
                <h2 className=' text-3xl mb-3 font-bold  text-center '>{album.title}</h2>
                <p>Release Date : {album.release_date}</p>
                <div className=' md:flex md:flex-shrink-0 items-center '>
                <Link href={`/discography/${album.id}`}>
                  <Image 
                  src={album.image_url}
                   alt='アルバムジャケット'
                    width={400} 
                    height={400}
                    className="object-cover transition-all rounded-md mx-auto "
                      />
                </Link>
                <ul className=' ml-5 text-left'>
                    {album.songs.map((s, index) => (
                    <li key={index} className=' mt-5 text-xl'>{s}</li>
                    ))}
                </ul>  
                </div>
                            </div>
                            ))}
          </ul>
    
    </div>
  );
};

export default DiscDetail;
