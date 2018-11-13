import React from 'react';
// import Component from 'react';
import axios from 'axios';
import { Button, 
    Modal, 
    Form, 
    FormControl,
    FormGroup,
    HelpBlock,
    ControlLabel
 } from 'react-bootstrap';


export default class AddRecipeForm extends React.PureComponent {
        constructor(props) {
          super(props);
      
          this.state = {
            show: false,
            name: '',
            contributor: '',
            description: '',
            ingredients: '',
            method: '',
          };
        }
      
        handleClose = () => {
          this.setState({ show: false });
        }
      
        handleShow = () => {
          this.setState({ show: true });
        }

        handleChange = (e) => {
            // console.log(e.target)
            this.setState({ 
                [e.target.name]: e.target.name,
                [e.target.contributor]: e.target.contributor,
                [e.target.description]: e.target.description,
                [e.target.ingredients]: e.target.ingredients,
                [e.target.method]: e.target.method,
            });
           
          }

        handleSubmit = (e) => {
            console.log("state=", this.state.name)
        axios.post(`https://hnhapi01.azurewebsites.net/api/cookbooks/1/recipes/`, {
            name: this.state.name,
            contributor: this.state.contributor,
            description: this.state.description,
            ingredients: this.state.ingredients,
            method: this.state.method,
            // name: 'smoothie',
            // contributor: 'mike',
            // description: 'blend',
            // ingredients: 'fruit',
            // method: 'blend',
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }

        render() {
          
          return (
            <div>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                Add Recipe
              </Button>
      
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                        // controlId="name"
                        >
                        <ControlLabel>Recipe Name</ControlLabel>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>What you call this dish.</HelpBlock>
                        </FormGroup>
                        <FormGroup
                        // controlId="contributor"
                        >
                        <ControlLabel>Your Name</ControlLabel>
                        <input
                            type="text"
                            name="contributor"
                            value={this.state.contributor}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Who is this recipe from?</HelpBlock>
                        </FormGroup>
                        <FormGroup
                        // controlId="description"
                        >
                        <ControlLabel>Recipe Description</ControlLabel>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>What do you love about this recipe?</HelpBlock>
                        </FormGroup>
                        <FormGroup
                        // controlId="ingredients"
                        >
                        <ControlLabel>Recipe Ingredients</ControlLabel>
                        <input
                            type="text"
                            name="ingredients"
                            value={this.state.ingredients}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Enter ingredients separated by a comma.</HelpBlock>
                        </FormGroup>
                        <FormGroup
                        // controlId="method"
                        >
                        <ControlLabel>Recipe Method</ControlLabel>
                        <input
                            type="text"
                            name="method"
                            value={this.state.method}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>How the magic happens.</HelpBlock>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
              </Modal>
            </div>
          );
        }
    }

