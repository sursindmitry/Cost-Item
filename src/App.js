import CostItem from "./components/CostItem";

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
            date:  new Date(2021, 4, 15),
            description: "Джинсы",
            amount: 40.50
        }
    ]
  return (
    <div>
      <h1>Начнём изучение React</h1>
        <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}></CostItem>
        <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}></CostItem>
        <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}></CostItem>

    </div>
  );
}

export default App;
