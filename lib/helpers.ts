export function createThumbnail(title: string, emoji: string): string {
  return `https://nathanael-louzoun.vercel.app/api/og?title=${encodeURIComponent(
    title
  )}&emoji=${encodeURIComponent(emoji)}`;
}
