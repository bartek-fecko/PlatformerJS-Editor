import * as React from 'react';
import { hot } from 'react-hot-loader';

// const reactLogo = require("./../assets/img/react_logo.svg");\

import '#/assets/scss/App.scss';
import EditorSkeleton from '#/modules/Skeleton/EditorSkeleton';

class App extends React.Component {
    public render() {
        return (
            <div className="app">
                <EditorSkeleton />
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
