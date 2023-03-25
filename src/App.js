import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const  INITIAL_COSTS =[
    {
        id: "c1",
        date:  new Date(2023, 2, 10),
        description: "Холодильник",
        amount: 999.99
    },
    {
        id: "c2",
        date:  new Date(2022, 3, 24),
        description: "Видеокарта",
        amount: 1200.99
    },
    {
        id: "c3",
        date:  new Date(2021, 11, 1),
        description: "Джинсы",
        amount: 40.50
    }
];
const App=()=> {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts((prevCosts) => {
            return [cost, ...prevCosts];
        });
    }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>

    </div>
  );
}

export default App;
