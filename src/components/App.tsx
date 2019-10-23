import * as React from 'react';
import { hot } from 'react-hot-loader/root';

// const reactLogo = require("./../assets/img/react_logo.svg");\

import '#/assets/scss/App.scss';
// import EditorSkeleton from '#/modules/Skeleton/EditorSkeleton';
import EditorSkeleton from '#/modules/Skeleton/index';

class App extends React.Component {
    public render() {
        return (
            <div className="app">
                <EditorSkeleton />
            </div>
        );
    }
}

export default hot(App);
