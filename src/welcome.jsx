import React from "react";


export default class Menu extends React.Component {


    render() {
      return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-3">

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Welcome to Admin Panel</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
<div className="text-block pb-5">
  <h2>
    Features
  </h2>

<ul className="list-group list-group-flush">
  <li className="list-group-item">Get rating players</li>
  <li className="list-group-item">Add/edit/remove words for question</li>
  <li className="list-group-item">Edit rules</li>
  <li className="list-group-item">Edit commands</li>
  <li className="list-group-item">Configuration bot parameters</li>

</ul>
</div>
<div className="card my-5" >
  <div className="card-body">
    <h5 className="card-title">Current game</h5>
<p>Current word: world</p>
<p>Tip:0</p>
<p>Score:5</p>
  </div>
  </div>
      <div className="cards">
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Bot "Anagram game"</h5>
    <h6 className="card-subtitle mb-2 text-muted">Last version: 0.1</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Github</a>
    
  </div>
</div>
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Admin panel Front-End</h5>
    <h6 className="card-subtitle mb-2 text-muted">Last version: 0.1</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Github</a>
    
  </div>
</div>
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Admin panel Back-End</h5>
    <h6 className="card-subtitle mb-2 text-muted">Last version: 0.1</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Github</a>
    
  </div>
</div>
</div>
      </main>
      );
    }
  }


