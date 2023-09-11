import Buttons from './components/buttons.js'
import Aside from './components/aside.js'

function App() {
  return (
    <div className="flex flex-row h-screen">
      <Aside/>
      <Buttons/>
    </div>
  );
}

export default App;
