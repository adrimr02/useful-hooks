import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHandle } from '../.'

const App = () => {

  const { handle, isError, isLoading, setters, values } = useHandle({
    initialValues: {
      name: 'John',
      age: 20,
    },
    onSubmit: async (values) => {
      console.log(values)
    },
    onError: (errors) => {
      console.error(errors)
    }
  })

  return (
    <div>
      <input type='text' value={values.name} placeholder='Name' onChange={(e) => setters.name(e.target.value)} />
      <input type='number' value={values.age} placeholder='Age' onChange={(e) => setters.age(Number(e.target.value))} />

      <button onClick={() => handle()} disabled={isLoading}>{ !isLoading ? 'Submit' : 'Loading...' }</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
