export class HarryPotterPhotoAPI {
  cache = new Map<string, string>();

  async getCharacterPhoto(name: string): Promise<string | null> {
    if (this.cache.has(name)) return this.cache.get(name)!;
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);
      if (!response.ok) return null;
      const data = await response.json();
      if (data.thumbnail?.source) {
        this.cache.set(name, data.thumbnail.source);
        return data.thumbnail.source;
      }
      return null;
    } catch {
      return null;
    }
  }

  async getActorPhoto(actor: string): Promise<string | null> {
    if (this.cache.has(actor)) return this.cache.get(actor)!;
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(actor)}`);
      if (!response.ok) return null;
      const data = await response.json();
      if (data.thumbnail?.source) {
        this.cache.set(actor, data.thumbnail.source);
        return data.thumbnail.source;
      }
      return null;
    } catch {
      return null;
    }
  }

  createGreyCircle(name: string): string {
    const initials = name.split(' ').map(n => n[0]).join('');
    const svg = `
      <svg width="238" height="238" xmlns="http://www.w3.org/2000/svg">
        <circle cx="119" cy="119" r="115" fill="#9CA3AF"/>
        <text x="119" y="130" text-anchor="middle" fill="white"
          font-family="Arial" font-size="42" font-weight="bold">
          ${initials}
        </text>
      </svg>
    `;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }
}

export const hpPhotoAPI = new HarryPotterPhotoAPI();
