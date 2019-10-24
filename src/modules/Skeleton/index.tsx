import { LeftPanel } from '#/modules/Widgets/LeftPanel/LeftPanel';
import { RightPanel } from '#/modules/Widgets/RightPanel/RightPanel';
import { Scene } from '#/modules/Widgets/Scene/Scene';
import { Toolbar } from '#/modules/Widgets/Toolbar/Toolbar';
import { useResizingRowElements } from '#/utils/enhanceWithRowResizing/enhanceWithRowResizing';
import * as React from 'react';
import * as C from './constants';

const Skeleton = () => {

   const [ResizableRow] = useResizingRowElements({ minElementWidth: 100 });

   return (
      <C.Wrapper>
         <Toolbar />
         <ResizableRow>
            <LeftPanel />
            <Scene />
            <RightPanel />
         </ResizableRow>
      </C.Wrapper>
   );
};

export default Skeleton;
