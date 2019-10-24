import { ResizableElement } from '#/components/Resizable/ResizableElement/ResizableElement';
import { useEffect } from 'react';
import * as React from 'react';
import * as C from './constants';

export interface UseResizingElementsProps {
   minElementWidth: number;
}

export const useResizingRowElements = ({ minElementWidth }: UseResizingElementsProps) => {
   let isHandlerDragging: boolean = false;
   let isNowClicked: boolean = false;
   let actualResizedElement: HTMLElement;
   let actualResizedElementRightSibling: HTMLElement;
   const resizableRowRef = React.useRef(null);

   const addStartListener = () => {
      document.addEventListener('mousedown', (e: MouseEvent) => {
         const targetElement = e.target as HTMLElement;
         if (!targetElement.dataset.isHandler) {
            return false;
         }
         actualResizedElement = targetElement.parentElement;

         actualResizedElementRightSibling = actualResizedElement.nextElementSibling as HTMLElement;
         isHandlerDragging = true;
         isNowClicked = true;
      });
   };

   const addMoveListener = () => {
      document.addEventListener('mousemove', (e: MouseEvent) => {
         if (!isHandlerDragging) {
            return false;
         }

         if (actualResizedElementRightSibling && isNowClicked) {
            actualResizedElementRightSibling.style.width = '0px';
            isNowClicked = false;
         }

         const resizedElementLeftOffset = actualResizedElement.getBoundingClientRect().left;
         const resizedElementNextWidth = e.clientX - resizedElementLeftOffset;
         actualResizedElement.style.width = `${Math.max(minElementWidth, resizedElementNextWidth)}px`;
         actualResizedElement.style.flexGrow = '0';

         if (actualResizedElementRightSibling) {
            actualResizedElementRightSibling.style.flexGrow = '1';
         }
      });
   };

   const addRemoveMoveListener = () => {
      document.addEventListener('mouseup', () => {
         isHandlerDragging = false;
         if (actualResizedElementRightSibling) {
            let nextElementWidth = actualResizedElementRightSibling.getBoundingClientRect().width;
            nextElementWidth = Math.max(minElementWidth, nextElementWidth);
            actualResizedElementRightSibling.style.width = nextElementWidth + 'px';
            actualResizedElementRightSibling.style.flexGrow = '0';
         }
      });
   };

   useEffect(() => {
      addStartListener();
      addMoveListener();
      addRemoveMoveListener();
   }, []);

   const ResizableRow = ({ children }) => {
      return (
         <C.Wrapper ref={resizableRowRef}>
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

   return [ResizableRow];
};
