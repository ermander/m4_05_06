import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from './SingleBook';
import {InputGroup, DropdownButton, FormControl, Dropdown} from 'react-bootstrap';

let books = {
    fantasy: require("../data/fantasy.json"),
    history: require("../data/history.json"),
    horror: require("../data/horror.json"),
    romance: require("../data/romance.json"),
    scifi: require("../data/scifi.json")
}



class BookList extends Component {
    render() {
        // let _books = books["fantasy"]
        let _books = books.fantasy

        let _categories = Object.keys(books)
        console.log(_categories)
        // return <></>

        return (
            <Container>
                <Row>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Categories"
                        id="input-group-dropdown-1"
                        >
                            {
                                _categories.map(category => <Dropdown.Item href="#">{category}</Dropdown.Item>)
                            }
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>
                </Row>
                <Row className="row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {
                        _books.map( book => <SingleBook book={ book } />)
                    }
                </Row>
            </Container>
        );
    }
}

export default BookList;