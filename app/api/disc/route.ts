import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetch('http://localhost:3000/data.json',{
      cache:"no-store"
    })
    const data = await response.json();

    if (!data || !data.albums) {
      // 期待されるデータが存在しない場合の処理
      console.error('無効なデータ形式');
      return NextResponse.json({ error: '無効なデータ形式' });
    }

    const { albums } = data;
    
    return NextResponse.json({ albums });
  } catch (error) {
    console.error(error, "エラー");
    return NextResponse.json({ error: 'データの取得に失敗しました' });
  }
}
