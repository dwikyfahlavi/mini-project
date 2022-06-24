import React from 'react';

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [
        {todo: 'Mow the lawn',complete:false}
      ],
      title:""
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    if (!isEmpty){
      this.setState({listTodo:[...this.state.listTodo, {todo : inputValue}]});
    }
  }

  /* Deklarasikan method handleContentChange */
  handleContentChange(event){
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.setState({content:inputValue,hasContentError:isEmpty});
  }

  handleSubmit() {
    // const inputValue = event.target.value;
    // const isEmpty = inputValue === '';
    // if (!isEmpty){
    //   this.setState({
    //     title: inputValue,
    //   });
    // }
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          Masukkan alamat email Anda
        </p>
      );
    }
    return (
      <div className='center'>
        <form onSubmit={() => {this.handleSubmit()}} >
            <div className='container'>
              <input className='inputan'
                placeholder='Create Todo'
                // value={value}
                onChange={(event) => {this.handleEmailChange(event)}}
              /> 
              <button onClick={this.handleSubmit()}>Create</button>
            </div>
          </form>
          {emailErrorText}
          <div className='container'>
            <table>
              <tr>
                <td className='cek' >{this.state.listTodo}</td>
                <td ><input className='btn-input' type='submit' value='Complete'></input></td>
                <td><input className='btn-input' type='submit' value='Update'></input></td>
                <td><input className='btn-input' type='submit' value='x'></input></td>
              </tr>
            </table>
          </div>  
          
        
      </div>
    );
  }
}

export default ToDoListForm;
