import { ResizableElement } from '#/components/Resizable/ResizableElement/ResizableElement';
import { useEffect } from 'react';
import * as React from 'react';
import * as C from './constants';

export interface UseResizingElementsProps {
   minElementWidth?: number;
}

export const useResizingRowElements = ({ minElementWidth = 100 }: UseResizingElementsProps) => {
   let isHandlerDragging: boolean = false;
   let isNowClicked: boolean = false;
   let actualResizedElement: HTMLElement;
   let actualResizedElementRightSibling: HTMLElement;
   let resizedElementWidth: string;
   let previousMousePosition: number;
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
         const computedMinWidth = getMinWidth(actualResizedElement.firstChild as HTMLElement) || minElementWidth;

         actualResizedElement.style.flexGrow = '0';

         if (actualResizedElementRightSibling) {
            actualResizedElementRightSibling.style.flexGrow = '1';
            const nextSiblingMinWidth = getMinWidth(actualResizedElementRightSibling.firstChild as HTMLElement);

            if ((actualResizedElementRightSibling.getBoundingClientRect().width - 20 > nextSiblingMinWidth)
               || e.clientX < previousMousePosition
            ) {
               resizedElementWidth = `${Math.max(computedMinWidth, resizedElementNextWidth)}px`;
               requestAnimationFrame(() => {
                  actualResizedElement.style.width = resizedElementWidth;
               });
            }
         }
         previousMousePosition = e.clientX;
      });
   };

   const getMinWidth = (element: HTMLElement) => parseInt(getComputedStyle(element).minWidth);

   const addRemoveMoveListener = () => {
      document.addEventListener('mouseup', () => {
         isHandlerDragging = false;
         if (actualResizedElementRightSibling) {
            let nextElementWidth = actualResizedElementRightSibling.getBoundingClientRect().width;
            // tslint:disable-next-line: max-line-length
            const computedMinWidth = getMinWidth(actualResizedElementRightSibling.firstChild as HTMLElement) || minElementWidth;
            nextElementWidth = Math.max(computedMinWidth, nextElementWidth);
            requestAnimationFrame(() => {
               actualResizedElementRightSibling.style.width = `${nextElementWidth}px`;
            });
            actualResizedElementRightSibling.style.flexGrow = '0';
         }
      });
   };

   useEffect(() => {
      addStartListener();
      addMoveListener();
      addRemoveMoveListener();
   }, []);

   interface ResizableRowProps {
      children: React.ReactElement[];
   }

   const ResizableRow = ({ children }: ResizableRowProps) => {
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
