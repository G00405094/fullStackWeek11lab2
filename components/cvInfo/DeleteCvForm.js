import { useState } from 'react';
import classes from './DeleteCvForm.module.css';

function DeleteCvForm(props) {
  const [cvId, setCvId] = useState('');
  
  function submitHandler(event) {
    event.preventDefault();
    props.onDeleteCV(cvId); 
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input 
        type="text" 
        value={cvId} 
        onChange={(e) => setCvId(e.target.value)} 
        placeholder="Enter CV name to delete"
      />
      <button type="submit">Delete CV</button>
    </form>
  );
}

export default DeleteCvForm;
