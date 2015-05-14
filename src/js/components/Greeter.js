import React from 'react/addons';
import reactMixin from 'react-mixin';

export default class Greeter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: 'World'
        };
    }

    render(){
        return (
            <div>
                <h2>Hello, {this.state.data}</h2>
                <input type="text" valueLink={this.linkState('data')}/>
            </div>
        );
    }
}

reactMixin(Greeter.prototype, React.addons.LinkedStateMixin);
