import { Component } from 'react'

class Counter extends Component {
    state = {
       cunt: 0,
       tags: ['tag1','tag2','tag3'],
       imgURL:  "https://picsum.photos/200"

    };// veriables used in  the class are state here as a decleration
    style = {
        fontSize: 50,
        fontWeight: "bold" ,
        backgroundColor: "skyblue",
       
    };
    style2 = {
        fontSize: 40,
        fontWeight: "bold" ,
        backgroundColor: "red",
       
    };
     //constructor(){

       // super();
       // this.halndleincrement = this.halndleincrement.bind(this);
        
    //}


    renderTags(){
        if (this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ol>{this.state.tags.map(index => <li key={{index}}>{index}</li>)}</ol>;


    }



halndleincrement = () =>{
      this.setState({cunt : this.state.cunt + 1 })
      
}   
 render() { 
       
        
     


        return <div>
            <img src={this.state.imgURL} alt=""></img>
            <span className='badge badge-primary m-2' style={this.newMethod()}>{this.formatcunt()}</span>
            <button className='btn btn-warning btn-sm' style={this.style} onClick={this.halndleincrement}>Increment</button>
             {this.renderTags()}
        </div>;// whats inside of a return visiblein root segment
        // instead of div can be replaced with <React.Fragment> insted <div>
    }

 

    newMethod() {
        
       
        return this.state.cunt===0 ? this.style:this.style2;// change the parth to diferent styles
    }





    formatcunt(){
     return this.state.cunt === 0 ? "Zero" : this.state.cunt;
      //  const{cunt}=this.state;
      //  return cunt === 0 ? <h2>Zero</h2> : cunt;
    }
}
 
export default Counter;
