import * as React from 'react';
import * as C from './constants';

interface ResizableElementProps {
   noResize?: boolean;
   ref?: React.Ref<HTMLElement>;
}

export const ResizableElement: React.FC<ResizableElementProps> = React.forwardRef((
   { children, noResize }, ref) => {
   return (
      <C.Wrapper ref={ref} data-is-resizing-element>
         {children}
         {noResize || <C.ResizableLine data-is-handler/>}
      </C.Wrapper>
   );
});
