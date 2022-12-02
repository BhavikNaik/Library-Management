import React , { useEffect }  from 'react';
import jwt from 'jsonwebtoken'
import { Form,FormGroup,Row,Col,Label, Input, ListGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();

    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const user = jwt.decode(token)
        if(!user){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            console.log(user);
        }
    }else{
        navigate('/login')
    }
})

    return(
        
        <div className="container loading">
        <div className="row">
            <div className="col-12 heading">
             <h3 align="center">Search your book here : </h3>
             <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name of book</Label>
              <Input type="name" name="name" id="name" value="vcb" onChange={(e)=>{this.setState({name: e.target.value});}} placeholder="Enter name of the book" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input type="author" name="author" id="author" value={this.state.author}  onChange={(e)=>{this.setState({author: e.target.value});}} placeholder="Enter name of author" />
            </FormGroup>
          </Col>
        </Row> 
        <Row>
        <Col sm={6} md={2}>
            Category : {' '}
        </Col>
        </Row>
        <FormGroup check>
        <Row>
        <Col xs={6} md={3}>
          <Label check for="romance">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="romance" value="Romance" name="cat" />
            Romance 
          </Label>
        </Col>
        <Col xs={6} md={3}>
          <Label check for="fiction">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="fiction" value="Fiction" name="cat" />
            Fiction
          </Label>
          </Col>

          <Col xs={6} md={3}>
          <Label check for="Arts">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Arts" value="Arts" name="cat" />
            Arts
          </Label>
          </Col>
          <Col xs={6} md={3}>
          <Label check for="computer">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="computer" value="Computer Science" name="cat" />
            Computer Science
          </Label>
          </Col>
          </Row>
          <Row>
        <Col xs={6} md={3}>
          <Label check for="management">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="management" value="Management" name="cat" />
            Management 
          </Label>
        </Col>
        <Col xs={6} md={3}>
          <Label check for="Physics">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Physics" value="Physics" name="cat" />
            Physics
          </Label>
          </Col>

          <Col xs={6} md={3}>
          <Label check for="technology">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="technology" value="Technology"  name="cat" />
            Technology
          </Label>
          </Col>
          <Col xs={6} md={3}>
          <Label check for="Philosophy">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Philosophy" value="Philosophy" name="cat" />
            Philosophy
          </Label>
          </Col>
          </Row>
          <Row>
        <Col xs={6} md={3}>
          <Label check for="Mathematics">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Mathematics" value="Mathematics" name="cat" />
            Mathematics 
          </Label>
        </Col>
        <Col xs={6} md={3}>
          <Label check for="Chemistry">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Chemistry" value="Chemistry" name="cat" />
            Chemistry
          </Label>
          </Col>

          <Col xs={6} md={3}>
          <Label check for="Electronics">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Electronics" value="Electronics" name="cat" />
            Electronics
          </Label>
          </Col>
          <Col xs={6} md={3}>
          <Label check for="Language">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Language" value="Language" name="cat" />
            Language
          </Label>
          </Col>
          </Row>
          <Row>
          <Col xs={6} md={3}>
          <Label check for="Other">
            <Input defaultChecked type="checkbox" onChange={this.onChange} id="Other" value="Other" name="cat" />
            Other
          </Label>
          </Col>
        </Row>
        </FormGroup>
        </Form>
            </div>
        </div>
        <div className="row">
        <div className="col-12">
      <br/>
      <ListGroup>

      </ListGroup>
      </div>
      </div>
      <br/>
    </div>

        );
}

export default Search;