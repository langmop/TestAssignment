import { gql } from "@apollo/client";

export const FETCH_PLAYLIST_QUERY = gql`
  query GetPlaylists {
    getPlaylists {
      id
      title
    }
  }
`;
