import { useState } from 'react';
import React from 'react';
import Output from './Output';
import Button from './Button';
import Input from './Input';

function Form(props) {
  const [name, setName] = useState('');

  async function handlerGender(event) {
    event.preventDefault();
    const apiUrl = `${props.fetchUrl.serverUrl}?name=${name}`;

    try {
      const fetchGender = await fetch(apiUrl);

      if (fetchGender.status !== 200) {
        throw Error('The name is not valid');
      }

      const response = await fetchGender.json();
      const outGender = await response.gender;
      const outName = await response.name;

      event.target.nextElementSibling.innerText = `${outName} is ${outGender}`;
    } catch(error) {
      console.log(error);
      return; 
    } finally {
      setName(''); 
    }
  }

  return (
    <div>
      <form onSubmit={handlerGender}>
        <label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <Button />
      </form>
      <Output />
    </div>
  )
}

export default Form;