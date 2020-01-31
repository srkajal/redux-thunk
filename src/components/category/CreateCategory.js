import React from 'react';
import { addCategoryAction, updateCategory } from '../actions/category-action';
import { connect } from 'react-redux';

class CreateCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', id: 0 };
    }

    componentDidUpdate(prevProps) {
        //console.log('Inside componentDidUpdate current:', this.props.category);
        //console.log('Inside componentDidUpdate prev:', prevProps.category);
        //console.log('Inside componentDidUpdate state:', this.state);
        //console.log('<------------------------------------->');
        const currentCategory = this.props.category;
        const previousCategory = prevProps.category;

        //console.log("currentCategory:", currentCategory);
        //console.log("State:", this.state);

        if(currentCategory && currentCategory.id !== this.state.id){
            if(previousCategory){
                if(previousCategory.id !== currentCategory.id) {
                    this.setState({ name: currentCategory.name, id: currentCategory.id });
                } else if(previousCategory.name !== currentCategory.name) {
                    this.setState({ name: currentCategory.name, id: currentCategory.id });
                }
                
            } else {
                this.setState({ name: currentCategory.name, id: currentCategory.id });
            }
            
        }
    }

    handelChange = (event) => {
        //console.log("Inside handleChage", event.target.value);
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    handelSubmit = (event) => {
        //console.log("inside Submit", this.state.id);
        event.preventDefault();

        this.setState({ isLoaded: false });

        if (this.state.id === 0) {
            const { name } = this.state;
            this.props.addCategoryAction({ name });
        } else {
            this.props.updateCategory(this.state);
        }

        this.setState({ name: '', id: 0 });

    }

    render() {
        //console.log('Inside Render', this.props);
        const category = this.props.category;
        //console.log('Inside Render', category);
        let operationName = 'Create Category';
        let buttonName = 'Create';

        if (category) {
            operationName = 'Update Category';
            buttonName = 'Update';
            //this.setState({ name: category.name, id: category.id });
        }

        return (
            <>
                <h3>{operationName}</h3>
                <form onSubmit={this.handelSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handelChange} />
                    <br />
                    <button className="btn btn-primary">{buttonName}</button>
                </form>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { addCategoryAction: (categoryName) => dispatch(addCategoryAction(categoryName)), updateCategory: (category) => dispatch(updateCategory(category)) };
}

function mapStateToProps(state) {
    //console.log('state:', state.category.category);
    const category = state.category ? state.category.category : {name: '', id: 0};
    return { category: category };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory);