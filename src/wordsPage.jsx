import React from "react";
import AddForm from "./addForm"
import axios from "axios";
// import Pagination from "./paginator";
import Pagination from "react-js-pagination";
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] ,activePage:1,totalPages:1};
    
  }
  async componentDidMount() {
  //   const pageNumber = window.location.href.match(/\d+$/)
   const url = "/words/"+this.state.activePage;
  
   const response = await axios.get(url);
    let massive = [...response.data.questions]
    let totalPagex=response.data.totalPages
  //   // massive = [
  //   //   { _id: "5ed13c06fa63172ac45676d0", question: "год", id: 0 },
  //   //   { _id: "5ed13c06fa63172ac45676d1", question: "человек", id: 1 },
  //   //   { _id: "5ed13c06fa63172ac45676d2", question: "время", id: 2 },
  //   //   { _id: "5ed13c06fa63172ac45676d3", question: "дело", id: 3 },
  //   //   { _id: "5ed13c06fa63172ac45676d4", question: "жизнь", id: 4 },
  //   //   { _id: "5ed13c06fa63172ac45676d5", question: "день", id: 5 },
  //   //   { _id: "5ed13c06fa63172ac45676d6", question: "рука", id: 6 },
  //   //   { _id: "5ed13c06fa63172ac45676d7", question: "работа", id: 7 },
  //   //   { _id: "5ed13c06fa63172ac45676d8", question: "слово", id: 8 },
  //   //   { _id: "5ed13c06fa63172ac45676d9", question: "место", id: 9 },
  //   // ];

     this.setState({ data: massive,totalPages:totalPagex});
 }

  async handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    
   
    const url = "/words/"+pageNumber;
  
    const response = await axios.get(url);
    let massive = [...response.data.questions]
    let totalPagex=response.data.totalPages
    console.log({activePage: pageNumber,data: massive,totalPages:totalPagex})
    this.setState({activePage: pageNumber,data: massive,totalPages:totalPagex});
  }
  render() {
    

    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-3">
        <h2>Words</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Word</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.sort((a,b)=>a.id-b.id).map((item,i) => (
                <tr key={i}>
                  <td>{item.id+1}</td>
                  <td>{item.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
<AddForm></AddForm>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={1}
          totalItemsCount={this.state.totalPages}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item"
linkClass="page-link"
        />
      </main>
    );
  }
}
