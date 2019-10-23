import { ResizableElement } from '#/components/ResizableElement/ResizableElement';
import { LeftPanel } from '#/modules/Widgets/LeftPanel/LeftPanel';
import { RightPanel } from '#/modules/Widgets/RightPanel/RightPanel';
import { Scene } from '#/modules/Widgets/Scene/Scene';
import { Toolbar } from '#/modules/Widgets/Toolbar/Toolbar';
import { useResizingElements } from '#/utils/enhanceWithResizing';
import * as React from 'react';
import * as C from './constants';

const Skeleton = () => {
   const sceneRef: React.Ref<HTMLElement> = React.useRef();
   const toolbarRef: React.Ref<HTMLDivElement> = React.useRef();
   const leftPanelRef: React.Ref<HTMLElement> = React.useRef();
   const rightPanelRef: React.Ref<HTMLElement> = React.useRef();
   // let resizableElementsClass: EnhanceWithResizing;

   // React.useEffect(() => {
   //    resizableElementsClass = new EnhanceWithResizing(
   //       [sceneRef.current, toolbarRef.current, leftPanelRef.current, rightPanelRef.current]
   //    );
   // }, []);

   const [WithResizing] = useResizingElements({minElementWidth: 60});

   return (
      <WithResizing>
         <C.Wrapper>
            <ResizableElement gridArea="toolbar" noResize ref={toolbarRef}>
               <Toolbar />
            </ResizableElement>
            <ResizableElement gridArea="scene" ref={sceneRef} >
               <Scene />
            </ResizableElement>
            <ResizableElement gridArea="leftPanel" ref={leftPanelRef} >
               <LeftPanel />
            </ResizableElement>
            <ResizableElement gridArea="rightPanel" noResize ref={rightPanelRef} >
               <RightPanel />
            </ResizableElement>
         </C.Wrapper>
      </WithResizing>
   );
};

export default Skeleton;
