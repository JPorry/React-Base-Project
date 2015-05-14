import React from 'react/addons';
import ReactMixin from 'react-mixin';

export default class Greeter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: 'World'
        }
    }

    render(){
        return(
            <div>
                <h1>Hello, {this.state.data}</h1>
                <input type="text" valueLink={this.linkState('data')}/>
            </div>
        );
    }
};

ReactMixin(Greeter.prototype, React.addons.LinkedStateMixin);

React.render(<Greeter />, document.getElementById('app'));