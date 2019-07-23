import React from 'react';
import { Pagination as Pag, PaginationItem, PaginationLink } from 'reactstrap';
import './pagination.css';

class Pagination extends React.Component {

  constructor() {
    super()
    this.state = {
      pageStartIndex: 0,
      totalPages: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      totalPages: 20,
    })
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  previousPage = () => {
    if (this.state.pageStartIndex === 0) {
      return;
    }
    this.setState({
      pageStartIndex: this.state.pageStartIndex - 1,
    }, this.scrollToTop);
  }

  nextPage = () => {
    if (this.state.pageStartIndex + this.props.numLinks === this.state.totalPages) {
      return;
    }
    this.setState({
      pageStartIndex: this.state.pageStartIndex + 1,
    }, this.scrollToTop);
  }

  firstPage = () => {
    if (this.state.pageStartIndex === 0) {
      return;
    }
    this.setState({
      pageStartIndex: 0,
    }, this.scrollToTop);
  }

  lastPage = () => {
    if (this.state.pageStartIndex + this.props.numLinks === this.state.totalPages) {
      return;
    }
    this.setState({
      pageStartIndex: this.state.totalPages - this.props.numLinks,
    }, this.scrollToTop);
  }

  renderBackLinks = () => {
    let backLinks = []
    if (this.state.pageStartIndex !== 0) {
      backLinks.push(
       <PaginationItem>
        <PaginationLink onClick={this.firstPage} first />
       </PaginationItem>
      );
      backLinks.push(
        <PaginationItem>
          <PaginationLink onClick={this.previousPage} previous />
        </PaginationItem>
      )
      return backLinks;
    }
  }

  renderForwardLinks = () => {
    let forwardLinks = []
    if (this.state.pageStartIndex + this.props.numLinks !== this.state.totalPages) {
      forwardLinks.push(
       <PaginationItem>
        <PaginationLink onClick={this.nextPage} next />
       </PaginationItem>
      );
      forwardLinks.push(
        <PaginationItem>
          <PaginationLink onClick={this.lastPage} last />
        </PaginationItem>
      )
      return forwardLinks;
    }
  }

  goToResultPage = (resultNum) => {
    console.log(resultNum)
    this.setState({
      pageStartIndex: this.state.pageStartIndex + resultNum,
    }, this.scrollToTop);
  }

  generatePaginationLinks = (num) => {
    let pag = []
    Array(num).fill().map((_, index) => {
      pag.push(<PaginationItem key={index}>
                <PaginationLink onClick={() => this.goToResultPage(index)} >
                  {this.state.pageStartIndex + index + 1}
                </PaginationLink>
              </PaginationItem>)
    });
    return pag;
  }

  render() {
    const pag = this.generatePaginationLinks(this.props.numLinks);
    const backLinks = this.renderBackLinks();
    const forwardLinks = this.renderForwardLinks();
    return (
      <Pag>
        {backLinks}
        {pag}
        {forwardLinks}
      </Pag>
    );
  }
}

export default Pagination;