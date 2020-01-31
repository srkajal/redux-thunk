import React from 'react';
import { getComments } from '../../api/CategoryApi';
import CommentsDetails from './CommentsDetails';

class comment extends React.Component {

    constructor() {
        super();
        this.state = {
            columnDefs: [{
                headerName: "Comment", field: "comment", sortable: true, filter: true
            }, {
                headerName: "Category Name", field: "category_name", sortable: true, filter: true
            }, {
                headerName: "Creation Date", field: "creation_date", sortable: true, filter: true, cellRenderer: (data) => {
                   return data.value ? (new Date(data.value + 'Z')).toLocaleDateString(): '';
                }
            }],
            rowData: [],
            name: '',
            message: '',
            id: 0,
            isLoaded: true
        }
    }

    /* handelChange = (event) => {
      console.log("Inside handleChage", event.target.value);
      const target = event.target;
      this.setState({ [target.name]: target.value });
    }
  
    handelSubmit = (event) => {
      //console.log("inside Submit", this.state.id);
      this.setState({ isLoaded: false });
  
      if (this.state.id === 0) {
        addCategory(this.state.name)
          .then(res => {
            this.loadCategories();
            this.setState({message: res.message});
            console.log('Message:', res.message);
          });
  
        //this.setState({ name: '' });
      } else {
        const id = this.state.id;
        const newName = this.state.name;
        updateCategory(this.state)
          .then(res => {
            let tempData = [...this.state.data];
            tempData = tempData.map(c => {
              if (c.id === id) {
                c.name = newName;
              }
              return c;
            });
            this.setState({ data: tempData, isLoaded: true, message: res.message });
            console.log('Message:', res.message);
  
          });
      }
  
      this.setState({ name: '', id: 0 });
      event.preventDefault();
    }
  
    handelDelete = (id) => {
      console.log("Delete Id: ", id);
      this.setState({ isLoaded: false });
      deleteCategory(id)
        .then(res => {
          console.log(res.message);
          let tempData = [...this.state.data];
          tempData = tempData.filter(c => c.id !== id);
          this.setState({ data: tempData, isLoaded: true });
        });
    }
  
    handelUpdate = (category) => {
      //console.log("Edit category: ", category);
      this.setState({ id: category.id, name: category.name });
    } */

    componentDidMount() {
        this.setState({ isLoaded: false });
        this.loadComments();
    }

    loadComments() {
        getComments()
            .then(resData =>
                this.setState({ rowData: resData, isLoaded: true }));

    }
    render() {
        return (
            <div>
                <CommentsDetails
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    isLoaded={this.state.isLoaded} />
                {/*
                <div>
                    <CreateCategory
                        handelSubmit={this.handelSubmit}
                        handelChange={this.handelChange}
                        category={this.state} />
                </div> */}
            </div>);
    }
}

export default comment;