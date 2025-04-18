export type ImageAsset = {
    src: string;
    alt: string;
    height: number;
    width: number;    
}

export type Project = {
    id: number;
    name: string;
    type: string;
    shortDesc: string;
    longDesc: string;
    tech: string[];
    status: string;
    percentage: number;
    thumbnail: ImageAsset;
    screenshot: ImageAsset;
    link: string;
}