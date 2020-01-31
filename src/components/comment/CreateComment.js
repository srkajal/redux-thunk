import React from 'react';

function CreateCategory(props) {
    let operationName = 'Create Category';
    let buttonName = 'Create';

    if (props.category.id !== 0) {
        operationName = 'Update Category';
        buttonName = 'Update';
    }

    return (
        <div>
            <h3>{operationName}</h3>
            <form onSubmit={(event) => props.handelSubmit(event)}>
                <label>Name:</label>
                <input type="text" name="name" value={props.category.name} onChange={(event) => props.handelChange(event)} />
                <br />
                <button className="btn btn-primary">{buttonName}</button>
            </form>
            <h2>{props.category.message}</h2>
        </div>
    );
}

export default CreateCategory;