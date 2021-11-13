
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

class ListSaveLoad extends Component {
    constructor(props) {
        super(props);
    }

    handleSave = () => {
        console.log("Saving list");
        console.log(this.props.shoppingList);
    }

    handleLoad = () => {
        console.log("Loading list");
        console.log(this.props.shoppingList);
    }

    render() {
        return(
            <div>
                <Button variant="contained" onClick={this.handleSave}>Save List</Button>
                &nbsp;&nbsp;
                <Button variant="contained" onClick={this.handleLoad}>Load List</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shoppingList: state.shoppingList
});

export default connect(mapStateToProps, null)(ListSaveLoad)