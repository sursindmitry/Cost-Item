import Costs from "./components/Costs";

function App() {
    const  costs =[
        {
            date:  new Date(2023, 2, 10),
            description: "Холодильник",
            amount: 999.99
        },
        {
            date:  new Date(2022, 3, 24),
            description: "Видеокарта",
            amount: 1200.99
        },
        {
            date:  new Date(2021, 11, 1),
            description: "Джинсы",
            amount: 40.50
        }
    ]
  return (
    <div>
      <h1>Начнём изучение React</h1>

        <Costs costs={costs}/>

    </div>
  );
}

export default App;
