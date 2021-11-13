import { Component } from 'react';
import { connect } from 'react-redux';
import { ShoppingListItem } from './ShoppingListItem';
import { deleteItem } from './actions';
import { List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

class ListView extends Component {
    constructor(props) {
        super(props);
    }

    deleteItem = (index) => {
        console.log("Deleting item");
        console.log(index);
        this.props.deleteItem(index);
    };

    render() {
        return(
            <div>List View: ({this.props.shoppingList.length} item(s))<br/>
                <List>
                    {this.props.shoppingList.map((item, index) => <div><ListItem disablePadding><ListItemButton><ClearIcon onClick={() => this.deleteItem(index)}/><ListItemText primary={item.name}/></ListItemButton></ListItem><Divider/></div>)}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shoppingList: state.shoppingList
});

export default connect(mapStateToProps, {deleteItem})(ListView)