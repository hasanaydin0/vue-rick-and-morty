import gql from "graphql-tag";

export const GET_CHARACTERS = gql`
   query {
      characters {
         results {
            id
            name
            status
            image
            location {
               id
               name
            }
            episode {
               id
               name
            }
         }
      }
   }
`;
