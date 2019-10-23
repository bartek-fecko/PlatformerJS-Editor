import styled from 'styled-components';

export const ResizableLine = styled.span`
   width: 5px;
   position: absolute;
   height: 100%;
   background: orange;
   right: 0;
   top: 0;
   cursor: ew-resize;
`;

export const Wrapper = styled.span<{ gridArea: string }>`
   position: relative;
   grid-area: ${({ gridArea }) => gridArea};
`;
