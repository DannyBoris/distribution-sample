export const ReleaseStatuses = [
  {
    id: "draft",
    label: "Draft",
  },
  {
    id: "in_review",
    label: "In review",
  },
  {
    id: "published",
    label: "Published",
  },
  {
    id: "rejected",
    label: "Rejected",
  },
  {
    id: "takedown",
    label: "Takedown",
  },
];

export interface Release {
  name: string;
  releaseId: number;
  release_id: string | number;
  artistName: string;
  artistId: string;
  releasesLocals: any[]; // You can replace "any" with the appropriate type
  artistLocals: any[]; // You can replace "any" with the appropriate type
  contributors: any[]; // You can replace "any" with the appropriate type
  version: string;
  copyrightP: string;
  copyrightC: string;
  hasRecordLabel: boolean;
  labelName: string | null;
  labelId: string | null;
  artistAppleId: string;
  artistSpotifyId: string;
  previouslyReleased: boolean;
  upc: string | null;
  releaseDate: string;
  primaryMusicStyleId: string;
  languageId: number;
  tracks: Track[]; // You can replace "any" with the appropriate type
  image: any; // You can replace "any" with the appropriate type
}

export interface DistributionOptions {
  saleStartDate: string | null;
  saleStartTime: string | null;
  saleStartTimezone: string | null;
  monetizationPolicyIds: number[];
  countriesIncluded: any[] | null;
  countriesExcluded: any[] | null;
  countriesCondition: "include" | "exclude";
}

export interface Artist {
  name: string;
  artistId: string | null;
  artistAppleId: string;
  artistSpotifyId: string;
  artistLocals: any[];
}

export interface Track {
  name: string;
  trackId: string | number;
  artistName: string;
  artistId: string | number;
  tracksLocals: any[];
  artistLocals: any[];
  contributors: any[];
  languageId: string | number;
  version: string;
  explicit: boolean;
  trackType: string;
  artistAppleId: string;
  artistSpotifyId: string;
  trackLength: number;
  sampleRate: number;
  wav: any;
  composerContentsDTO: any[];
  isrc: string | null;
}
