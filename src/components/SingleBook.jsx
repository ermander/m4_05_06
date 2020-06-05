import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class SingleBook extends Component {
    render() {
        let book = this.props.book
        return (
            <div className="col">
                <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title>
                            {book.title}
                        </Card.Title>
                        <Card.Text>
                        <div className="d-flex justify-content-around">
                            <div>
                                {book.category}
                            </div>
                            <div>
                                €{book.price}
                            </div>                            
                        </div>
                        <div>
                        <Button variant="primary">Add To Cart</Button> 
                        </div>                                                    
                        </Card.Text>                        
                    </Card.Body>
                </Card>                                    
            </div>
        );
    }
}

export default SingleBook;


/*
Create a SingleBook component. The component receives as a prop a book object and display the cover and the
title of the book. Use react-bootstrap Cards to display a book (The book object can be read from the one of the .json
book files)
*/