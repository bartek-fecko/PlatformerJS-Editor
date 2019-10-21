import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100vh;
   overflow-y: hidden;
   * {
      border: 1px solid orange;
   }
`;

export const Toolbar = styled.div`
   /* position: fixed !important; */
   background: red;
   z-index: 999;
`;

export const Scene = styled.main`

`;

export const RightPanel = styled.aside`
   /* position: fixed !important; */
   z-index: 999;
`;

export const LeftPanel = styled.aside`
   /* position: fixed !important; */
   z-index: 999;
   background: orange;
`;

export const BottomGuard = styled.div`
   height: 500px;
`;
