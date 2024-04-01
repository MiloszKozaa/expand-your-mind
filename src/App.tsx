import { Center, Footer, Middle, Navbar } from 'modules';
import './App.scss';

const App = () => {
  return (
    <div className='App flex flex-col'>
      <Center />
      <Navbar />
      <Middle />
      <Footer />
    </div>
  );
};

export default App;
