import * as React from 'react';
import { useEffect } from 'react';

export type ResponisveChildrens = Array<React.ReactChildren & {
   ref: React.RefObject<HTMLElement>;
   props: {
      noResize: boolean;
      gridArea: string;
   };
}>;

export interface UseResizingElementsProps {
   minElementWidth: number;
}

export interface ResizableHtmlElementsStates {
   element: HTMLElement;
   width?: number;
}

export const useResizingElements = ({ minElementWidth }: UseResizingElementsProps) => {
   let resizableReactElements: ResponisveChildrens;
   // tslint:disable-next-line: prefer-const
   let resizableHtmlElementsStates: ResizableHtmlElementsStates[] = [];
   // tslint:disable-next-line: prefer-const
   let resizableHtmlHandlers: HTMLElement[] = [];
   let wrapper: HTMLElement;
   let actualResizedElement: HTMLElement;
   let actualHandlerIndex: string;
   let isHandlerDragging: boolean = false;

   const getHtmlElements = (resizingWrapperChildrens: ResponisveChildrens) => {
      if (resizingWrapperChildrens.length === 0) {
         throw new Error('Responisve element must have children.');
      }

      wrapper = resizingWrapperChildrens[0].ref.current.parentElement;

      React.Children.forEach(resizingWrapperChildrens, (
         { ref: { current: resizableHtmlElement }, props: { noResize, gridArea } }, index,
      ) => {
         resizableHtmlElementsStates = [...resizableHtmlElementsStates, { element: resizableHtmlElement }];

         if (!noResize) {
            (resizableHtmlElement.lastElementChild as HTMLElement).dataset.index = index.toString();
            resizableHtmlHandlers = [...resizableHtmlHandlers, resizableHtmlElement.lastElementChild as HTMLElement];
         }
      });
   };

   const addStartListener = () => {
      document.addEventListener('mousedown', (e: MouseEvent) => {
         const targetElement = e.target as HTMLElement;
         actualHandlerIndex = targetElement.dataset.index ? targetElement.dataset.index : null;
         if (!actualHandlerIndex) {
            return false;
         }

         actualResizedElement = targetElement.parentElement;

         resizableHtmlElementsStates = resizableHtmlElementsStates.map(({ element }) => (
            {
               element,
               width: element.getBoundingClientRect().width,
            }
         ));

         isHandlerDragging = true;

      });
   };

   const addMoveListener = () => {
      document.addEventListener('mousemove', (e: MouseEvent) => {
         if (!isHandlerDragging) {
            return false;
         }

         const resizedElementLeftOffset = actualResizedElement.getBoundingClientRect().left;
         const nextResizedElementWidth =  e.clientX - resizedElementLeftOffset;
         actualResizedElement.style.width = `${Math.max(minElementWidth, nextResizedElementWidth)}px`;

      });
   };

   const addRemoveMoveListener = () => {
      document.addEventListener('mouseup', () => {
         isHandlerDragging = false;
      });
   };

   useEffect(() => {
      getHtmlElements(resizableReactElements);
      addStartListener();
      addMoveListener();
      addRemoveMoveListener();
   }, []);

   const WithResizing = ({ children }) => {
      const { props: { children: resizingWrapperChildrens } } = children;
      resizableReactElements = resizingWrapperChildrens;
      return (children);
   };

   return [WithResizing];
};
