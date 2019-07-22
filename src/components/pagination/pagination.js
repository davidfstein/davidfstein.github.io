import React from 'react';
import { Pagination as Pag, PaginationItem, PaginationLink } from 'reactstrap';
import './pagination.css';

class Pagination extends React.Component {

  generatePaginationLinks = (num) => {

  }

  render() {
    return (
      <Pag>
      <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pag>
    );
  }
}

export default Pagination;