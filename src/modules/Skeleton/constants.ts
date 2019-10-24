import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   overflow: hidden;
   height: 100vh;
   & > :last-child {
      flex-grow: 1;
   }
   /* * {
      border: 1px solid orange;

      /* min-height: 100px; 
   } */
`;

