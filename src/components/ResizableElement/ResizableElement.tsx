import * as React from 'react';
import * as C from './constants';

interface ResizableElementProps {
   gridArea: string;
   noResize?: boolean;
   ref: React.Ref<HTMLElement>;
}

export const ResizableElement: React.FC<ResizableElementProps> = React.forwardRef((
   { children, gridArea, noResize }, ref) => {
   return (
      <C.Wrapper gridArea={gridArea} ref={ref} >
         {children}
         {noResize || <C.ResizableLine />}
      </C.Wrapper>
   );
});
