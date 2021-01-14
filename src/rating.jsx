import React from "react";

import axios from "axios";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  async componentDidMount() {
    const url = "/rating";
    const response = await axios.get(url);

    let massive = [...response.data]
    // let massive = [
    //   {https://a9a7f25c-0a7a-43b0-a4a0-d55d0dfa8ed0.mock.pstmn.io/rating
    //     _id: "5ed13c6e86fb294595f86223",
    //     userId: "280732032282263552",
    //     userName: "Realism",
    //     score: "15",
    //     __v: "0",
    //   },
    //   {
    //     _id: "5ed13d5b86fb294595f86224",
    //     userId: "280732009733685259",
    //     userName: "index",
    //     score: "12",
    //     __v: 0,
    //   },
    // ];
  
    this.setState({ data: massive });
  }
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-3">
        <h2>Rating</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>

                <th>#</th>
                <th>User Id</th>
                <th>Nickname</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item,index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.userId}</td>
                  <td>{item.userName}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}
