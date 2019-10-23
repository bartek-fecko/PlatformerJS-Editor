// import { Scene } from '#/modules/Scene/Scene';
// import * as React from 'react';
// import * as GridLayout from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// import * as C from './constants';

// const EditorSkeleton: React.FC = () => {
//     const sceneRef = React.useRef();

//     React.useEffect(() => {
//         // tslint:disable-next-line: no-unused-expression
//         new Scene(sceneRef.current as HTMLElement);
//     }, []);

//     const layout = [
//         { i: 'Toolbar', x: 0, y: 0, w: 14, h: 1 },
//         { i: 'LeftPanel', x: 0, y: 1, w: 1, h: 14 },
//         { i: 'RightPanel', x: 14, y: 1, w: 1, h: 14 },
//         { i: 'Scene', x: 1, y: 2, w: 5, h: 14, minW: 4 },
//         { i: 'Bottom', x: 0, y: 14, w: 14, h: 5, static: true },
//     ];

//     let translateOrigin: string;

//     function getTranslate(oldItem: HTMLElement) {
//         const style = window.getComputedStyle(oldItem);
//         const matrix = new WebKitCSSMatrix(style.webkitTransform);
//         return `(${matrix.m41}px, ${matrix.m42}px)`;
//     }

//     // tslint:disable-next-line: variable-name
//     const onDragStart = (_layout, _oldItem, _newItem, _placeholder, _e, element) => {
//         translateOrigin = getTranslate(element);
//     };

//     // tslint:disable-next-line: variable-name
//     const onDragStop = (_layout, _oldItem, newItem, _placeholder, _e, element) => {
//         if (newItem.y >= 14) {
//             element.style.transform = `translate${translateOrigin}`;
//         }
//     };

//     return (
//         <C.Wrapper>
//             <GridLayout
//                 className="layout"
//                 layout={layout}
//                 cols={12}
//                 rowHeight={30}
//                 width={1200}
//                 height={600}
//                 preventCollision
//                 onDragStart={onDragStart}
//                 onDragStop={onDragStop}
//             >
//                 <C.Toolbar key="Toolbar" />
//                 <C.Scene ref={sceneRef} key="Scene" />
//                 <C.LeftPanel key="LeftPanel" />
//                 <C.RightPanel key="RightPanel" />
//                 <C.BottomGuard key="Bottom" />
//             </GridLayout>
//         </C.Wrapper>
//     );
// };

// export default EditorSkeleton;
