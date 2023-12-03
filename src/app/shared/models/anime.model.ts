export interface Anime {
    mal_id: number;
    title: string;
    synopsis: string;

    image?: string;
    trailer?: string;

    year: number;
    type: string;

    is_favorite: boolean;
}