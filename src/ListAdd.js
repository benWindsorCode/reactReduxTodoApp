import { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class ListAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            user: ''
        };
    }

    updateInput(newInput) {
        this.setState({input: newInput});
    }

    updateUser(newUser) {
        this.setState({user: newUser});
    }

    handleClick = () => {
        this.props.addItem(this.state.input, this.state.user);
        this.setState({input: ''});
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return(
            <div>
                <TextField variant="outlined" label="User" onChange={e => this.updateUser(e.target.value)} value={this.state.user}></TextField>
                &nbsp;
                <TextField variant="outlined" label="Item" onChange={e => this.updateInput(e.target.value)} value={this.state.input} onKeyDown={this.handleKeyDown}></TextField>
                <br/><br/>
                <Button variant="contained" onClick={this.handleClick}>Add Item</Button>
            </div>
        )
    }
}

export default connect(
    null,
    { addItem }
)(ListAdd)