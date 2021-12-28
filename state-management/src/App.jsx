
import Todo from './components/Todo'

function App() {
  return (
    <>
      <div>
        <Todo heading = 'Mobile Operating System' data = {['Android', 'iPhone', 'Windows Phone', 'BalckBerry']}>
          <p className='children-color'>we will add more soon...</p>
        </Todo>
      </div>
      <div>
        <Todo heading = 'Mobile Manufacturer' data = {['Samsung', 'HTC', 'Nokia', "Micromax", "Lava"]}>
          <p className='children-color'>we will add more soon...</p>
        </Todo>
      </div>
    </>
  );
}

export default App;
