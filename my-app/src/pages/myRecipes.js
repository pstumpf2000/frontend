import React from 'react';
import axios from 'axios';
import { Button, Table, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'


export default class MyRecipes extends React.Component {
    state = {
        recipes: []
    }
    
    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get(`https://hnhapi01.azurewebsites.net/api/cookbooks/2/recipes`)
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
                    {recipe.id}
                </td>
                <td>
                    {recipe.name}
                </td>
                <td>
                    {recipe.name}
                </td>
                <td>
                    {recipe.name}
                </td>
                <td>
                    <FontAwesomeIcon icon={faEdit} onClick={this.handleEdit}/>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleDelete(recipe.id)}/>
                </td>
            </tr>
            )
        })
    };

    handleDelete = (id) => {  
        // this.setState({ recipes: e.target.value })
        console.log(id)
            // e.preventDefault();
        
            axios.delete(`hhttps://hnhapi01.azurewebsites.net/api/cookbooks/2/recipes/${id}`)
              .then(res => {
                console.log(res);
                console.log(res.data);
              })
      }

    handleEdit () {
        // alert('edit')
        // axios.delete('https://hnhapi01.azurewebsites.net/api/cookbooks/2/recipes')
        //   .then(response => console.log(response))
      }

    render() {
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Header1</th>
                <th>Header2</th>
                <th>Header3</th>
                <th>Header4</th>
                </tr>
            </thead>
            <tbody>
                {this.makeTableRows(this.state.recipes)}
            </tbody>
        </Table>
        
 
    )
  }
}