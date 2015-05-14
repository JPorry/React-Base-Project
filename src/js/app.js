import React from 'react/addons';

import Greeter from './components/Greeter';

class Page extends React.Component{

    render(){
        return (
            <div>
                <h1>Ready!</h1>
                <Greeter />
            </div>
        );
    }
}

React.render(<Page />, document.getElementById('app'));
