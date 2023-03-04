import { Release } from "./types";

export const dummy_release = (id: number): Release => ({
  release_id: id,
  name: "Times files",
  releaseId: 0,
  artistName: "Danny borisoc",
  artistId: "",
  releasesLocals: [dummy_local(3), dummy_local(5), dummy_local(58)],
  artistLocals: [],
  contributors: [],
  version: "",
  copyrightP: "2029 nice grind",
  copyrightC: "2048 local shop",
  hasRecordLabel: false,
  labelName: null,
  labelId: null,
  artistAppleId: "",
  artistSpotifyId: "",
  previouslyReleased: false,
  upc: "",
  releaseDate: "",
  primaryMusicStyleId: "",
  languageId: 1,
  tracks: [dummy_track("No more", 1), dummy_track("More please", 2)],
  image: {
    externalUrl: "https://picsum.photos/160/160",
    largeExternalUrl: "https://picsum.photos/440/440",
  },
});

export const dummary_artist = (name: string, id: number) => ({
  name,
  artistId: id,
  artistLocals: [],
  artistAppleId: 4534,
  artistSpotifyId: "rfdsaf234",
});

export const dummy_local = (languageId: number | string) => ({
  name: "Nice song",
  languageId,
});

export const dummy_track = (name: string, id: number) => ({
  name,
  id,
  tarcksLocals: [],
  key: id + 1,
  index: id -1,
});
