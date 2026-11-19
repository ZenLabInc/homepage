/* YouTube の公開フィード(API キー不要)から、開発記録の動画を読む。
   タイトルか説明に「#開発記録」が付いた動画だけを、新しい順に返す。
   ページを開くたびに読み直すので、YouTube に投稿すればサイトにも自動で並ぶ
   (YouTube のフィード自体の反映に十数分かかることはある)。 */

export const YOUTUBE_CHANNEL_ID = "UCT3Y4S8vM74xzNL6wQR1Zmg";
export const DEV_LOG_TAG = "#開発記録";

export type DevLogVideo = {
  id: string;
  title: string;
  published: string; // ISO 8601
};

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function pick(block: string, tag: string) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? decode(m[1].trim()) : "";
}

export async function fetchDevLogVideos(limit = 3): Promise<DevLogVideo[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = xml.split("<entry>").slice(1);
    return entries
      .map((e) => ({
        id: pick(e, "yt:videoId"),
        title: pick(e, "title"),
        published: pick(e, "published"),
        description: pick(e, "media:description"),
      }))
      .filter((v) => v.id && (v.title.includes(DEV_LOG_TAG) || v.description.includes(DEV_LOG_TAG)))
      .slice(0, limit)
      .map(({ id, title, published }) => ({ id, title: title.replace(/\s*#\S+/g, "").trim(), published }));
  } catch {
    // 読めなくてもページは出す(動画の枠を出さないだけ)
    return [];
  }
}
