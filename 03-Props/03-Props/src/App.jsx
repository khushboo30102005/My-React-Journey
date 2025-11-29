import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <div className="parent">
        <Card
          img="https://images.unsplash.com/photo-1763996313498-8c60ed0610ac?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Khushboo saini"
          dis="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          img="https://images.unsplash.com/photo-1764106284214-f1060ba34c20?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Aasha Khan"
          dis="The internet’s source for visuals. Powered by creators everywhere.."
        />
        <Card
          img="https://images.unsplash.com/photo-1763998861274-50ad8e2a182c?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Sneha Singh"
          dis="From epic drone shots to inspiring moments in nature."
        />
      </div>
    </>
  );
}

export default App;
