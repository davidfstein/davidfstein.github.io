import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import './search.css';

function Search() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Input type="search" name="search" id="search" placeholder="Search" />
                </FormGroup>
            </Form>
        </div>
    );
}

export default Search;