import { gql } from "@apollo/client";

export const FETCH_MUSIC_BY_PLAYLIST = gql`
  query GetSongs($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      title
      photo
      duration
      url
      artist
      _id
    }
  }
`;

export const FETCH_MUSIC_BY_SEARCH = gql`
  query GetSongs($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      title
      photo
      duration
      url
      artist
      _id
    }
  }
`;
