import React from 'react';
import axios from 'axios';
import { Button, Table, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faXRay } from '@fortawesome/free-solid-svg-icons'


export default class RecipeTable extends React.Component {
    state = {
        recipes: [],
        recipeId: ''
    }
    
    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get(`https://hnhapi01.azurewebsites.net/api/cookbooks/1/recipes`)
        .then(res => {
            const recipes = res.data;
            this.setState({ recipes });
        })
    }

    makeTableRows = recipes => {
        return recipes.map((recipe, i) => {
        return (
            <tr key={recipe.id}>
                <td>
                    {recipe.name}
                </td>
                <td>
                    {recipe.description}
                </td>
                <td>
                    {recipe.ingredients}
                </td>
                <td>
                    {recipe.method}
                </td>
                <td>
                    <FontAwesomeIcon icon={faEdit} onClick={this.handleEdit}/>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => this.handleClick(recipe.id)}/>
                </td>
            </tr>
            )
        })
    };

    handleClick = (id) => {
        console.log(id)
        this.setState({ recipeId: id }, this.handleDelete(id))
        // this.handleDelete()
        console.log(this.state.recipeId)
    }

    handleDelete = (id) => {  
        console.log(this.state.recipeId)
        // this.setState({ recipes: e.target.value })
        // console.log(id)
            // e.preventDefault();
            axios.delete(`https://hnhapi01.azurewebsites.net/api/cookbooks/1/recipes/${id}`)
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ recipeId: '' })
              })
      }

    handleEdit () {
        // alert('edit')
        // axios.delete('https://hnhapi01.azurewebsites.net/api/cookbooks/1/recipes')
        //   .then(response => console.log(response))
      }

    render() {
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Ingredients</th>
                <th>Method</th>
                <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.makeTableRows(this.state.recipes)}
            </tbody>
        </Table>
        
 
    )
  }
}