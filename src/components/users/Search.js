import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // state = {
  //   text: '',
  // };
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  // updating text state
  const onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value);
  };

  return (
    <div>
      {/* normal function want to add bind for .this */}
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='search users...'
          // value={this.state.text}
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
