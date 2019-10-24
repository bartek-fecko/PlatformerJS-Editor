import * as React from 'react';
import { ResizableElement } from '../ResizableElement/ResizableElement';
import * as C from './constants';

interface ResizableRowProps {
   noResize?: boolean;
}

export const ResizableRow: React.FC<ResizableRowProps> = (
   { children, noResize }) => {

   return (
      <C.Wrapper>
         {React.Children.map(children, (child) => {
            return (
               <ResizableElement>
                  {child}
               </ResizableElement>
            );
         })}
      </C.Wrapper>
   );
};
