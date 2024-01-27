import Image from "next/image";
import profile2021 from "/public/images/profile2021.jpg"


import React from 'react'

const Profile = () => {

  return (
    <div className="  mx-auto max-w-5xl">
        <h1 className="mb-6 font-thin text-gray-500 text-6xl pt-7 md:ml-16 ml-5">
        Profile</h1>
    <div className=" aspect-[16/9] relative w-[500px] mx-auto">
        <Image
        src={profile2021}
        alt=""
        
        className="object-cover rounded-md"
       
        
        />
    </div>
    <div className=" flex-shrink  p-5 max-w-5xl mx-auto"> 
      <p>大阪出身ピアノ弾き語りシンガーソングライター
<br />
ハイトーンボイスのボーカルとピアノを軸に
POPでHAPPYな旋律を
独自のファンタジーな世界観で表現する。<br />
2012年シングル『トンネルの向こう側』で
インディーズデビュー。
大阪・心斎橋BIGCATにて
2年連続ワンマンライブを開催。
<br />
その後、原点に返って行った弾き語りワンマンは
東名阪全公演soldout。
東海エリアのみで販売した限定CD「ホーム」は
7日間で500枚完売。
2019年には、初主催フェス、自身最大規模での
ワンマンライブを愛知と大阪で大成功させる。
<br />
シンガーソングライタ ーだけに留まらず、
モデル業も開始。
活動を全国に広げ、インストアライブや
イベント出演など精力的に活動中。

繊細さと力強さを併せもつ歌声と
バリエーション豊かな楽曲が魅力。</p>
    </div>
    </div>
  )
}

export default Profile