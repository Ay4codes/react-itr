import Card from './components/Todo'
function App() {
  return (
    <div className="card-container">
      <h1>My Todos</h1>
      <Card text="Learn React" />
      <Card text="Master React"/>
      <Card text="Explore the full react course"/>
    </div>
  );
}

export default App;
