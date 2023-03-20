import CostForm from "./CostForm";

import './NewCost.css'
import {useState} from "react";
const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };

        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    const inputCostDataHAndler = () =>{
        setIsFormVisible(true);
    };

    const cancelCostDataHAndler = () =>{
        setIsFormVisible(false);
    };
    return (
        <div className="new-cost">
            {!isFormVisible && (<button onClick={inputCostDataHAndler}>Добавить новый расход</button>)}
            {isFormVisible && (
                <CostForm onSaveCostData={saveCostDataHandler}
                onCancel={cancelCostDataHAndler}
                />
            )}

        </div>
    );
};

export default NewCost;