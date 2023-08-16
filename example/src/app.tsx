import { useForm } from '../../.'

const App = () => {

  const { handle, isError, isLoading, setters, values } = useForm({
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
      <input type='text' placeholder='Name' value={values.name} onChange={(e) => { setters.name(e.target.value)}} />
      <input type='number' value={values.age} placeholder='Age' onChange={(e) => setters.age(Number(e.target.value))} />
      { isError && <p>There was an error</p> }
      <button onClick={() => handle()} disabled={isLoading}>{ !isLoading ? 'Submit' : 'Loading...' }</button>
    </div>
  );
};

export default App