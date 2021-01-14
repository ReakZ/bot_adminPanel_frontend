import React,{useState} from "react";



export default class AddForm extends React.Component {
constructor(props){
    super(props)
    this.state={word:''}

    
}

changeHandler=(e)=>{
this.setState({word:e.target.value})
console.log(this.state)
}

sumbitHandler=async (e)=>{
    e.preventDefault()
   
    const url="posts/addPost"
    try{
const responce =await fetch(url,{
    method:'POST',
    body:JSON.stringify({word:this.state.word}),
    headers:{'Content-Type':'application/json'}
})

    }
    catch(error){
        console.log("er",error)
    }
    this.setState({word:''})
}
  render() {
    


    return (

<form onSubmit={this.sumbitHandler}>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="New world..." aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.word} onChange={this.changeHandler}></input>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" >Add</button>
  </div>
</div>
</form>
    );
  }
}
