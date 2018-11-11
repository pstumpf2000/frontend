import React from 'react';
import axios from 'axios';
import { Button, Table, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'


export default class Recipes extends React.Component {
    state = {
        recipes: []
    }
    
    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get(`https://cityinfoapi-1.azurewebsites.net/api/cities`)
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
                    <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleDelete}/>
                </td>
            </tr>
            )
        })
    };

    handleDelete = (e) => {  
        // this.setState({ recipes: e.target.value })
        console.log(e)
            // e.preventDefault();
        
            // axios.delete(`https://cityinfoapi-1.azurewebsites.net/api/cities/${this.state.recipes.id}`)
            //   .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            //   })
      }

    handleEdit () {
        // alert('edit')
        // axios.delete('https://cityinfoapi-1.azurewebsites.net/api/cities')
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