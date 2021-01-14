import React from "react";


export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPages: 1 ,activePage:1};
    
  }

    render() {
      const a=new Array(this.props.totalPages).fill(null).map((x,i)=>i+1)
      
      return (
        
<nav aria-label="Page navigation example">
  <ul className="pagination">
  <li className="page-item"><a className="page-link" href="/words">Previous</a></li>
    {a.map(x=>
    {
      return x===this.props.activePage?(<li className="page-item active" key={x}><a className="page-link" href={"/wordsPage/"+x}>{x}</a></li>):(<li className="page-item" key={x}><a className="page-link" href={"/wordsPage/"+x} >{x}</a></li>)
    })}
    
    
   
    <li className="page-item"><a className="page-link" href="/words" >Next</a></li>
    
  </ul>
</nav>
      );
    }
  }


