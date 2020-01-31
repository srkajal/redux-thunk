import React from 'react';
import { deleteCategory, categoryUpdateRequestred } from '../actions/category-action';
import {connect} from 'react-redux';

class Row extends React.Component {

    handelDelete(category) {
        //console.log("Delete category: ", category);
        const { id } = category;
        this.props.deleteCategory({ id });
    }

    handelUpdate(category) {
        //console.log("Edit category: ", category);
        this.props.categoryUpdateRequestred(category);
    }

    render() {
        return (
            <tr>
                <td>{this.props.category.name}</td>
                <td><button onClick={() => this.handelUpdate(this.props.category)}>Edit</button></td>
                <td><button onClick={() => this.handelDelete(this.props.category)}>Delete</button></td>
            </tr>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return { deleteCategory: (category) => dispatch(deleteCategory(category)), categoryUpdateRequestred: (category) => dispatch(categoryUpdateRequestred(category)) };
}

export default connect(null, mapDispatchToProps) (Row);