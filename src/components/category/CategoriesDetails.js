import React from 'react';
import Row from './Row'
import { getCategoriesAction } from '../actions/category-action';
import { connect } from 'react-redux';

export class CategoriesDetails extends React.Component {

    componentDidMount() {
        this.props.getCategoriesAction();
    }

    render() {
        /* if (!this.props.isLoaded) {
            return <div>Loaded .....</div>;
        } */

        return (
            <div>
                <h3>Categories</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories.map(c => <Row
                            key={c.id}
                            category={c} />)}
                    </tbody>
                </table>
                <h4>{this.props.message}</h4>
            </div>);
    }

}

function mapStateToProps(state) {
    return { categories: state.categories, message: state.message };
};

export default connect(mapStateToProps, { getCategoriesAction })(CategoriesDetails);