import React from 'react';

import Dummy from './component/Dummy/Dummy';

console.log("hallo");
class App extends React.Component {

    render() {
        console.log("hallo");
        return (
            <div className="container">
                Hello
                <Dummy />
            </div>
        );
    }
};
export default App;
