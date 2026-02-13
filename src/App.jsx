import Hierarchy from './components/Hierarchy/Hierarchy';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh', 
      width: '100vw',   /* This fixes the black side */
      margin: 0,        /* Removes default browser gaps */
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <Hierarchy />
    </div>
  );
}

export default App;
