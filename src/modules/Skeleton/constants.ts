import styled from 'styled-components';

export const Wrapper = styled.div`
   /* height: 100vh; */
   /* overflow-y: hidden; */
   display: grid;
   grid-gap: 10px;
   grid-template-columns: 200px calc(100vw - 400px - 20px) 200px;
   grid-template-rows: 100px calc(100vh - 100px - 10px);
   grid-template-areas:
      "toolbar  toolbar toolbar"
      "leftPanel scene rightPanel";
   * {
      border: 1px solid orange;
   }
`;

// export const Toolbar = styled.div`
//    /* position: fixed !important; */
//    background: red;
//    grid-area: toolbar;
// `;

// export const Scene = styled.main`
//    grid-area: scene;
// `;

// export const RightPanel = styled.aside`
//    /* position: fixed !important; */
//    grid-area: rightPanel;
// `;

// export const LeftPanel = styled.aside`
//    /* position: fixed !important; */
//    background: orange;
//    grid-area: leftPanel;
// `;

// export const BottomGuard = styled.div`
//    height: 500px;
// `;
