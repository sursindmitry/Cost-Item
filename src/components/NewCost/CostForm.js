import './CostForm.css'
import {useState} from "react";

const CostForm = (props) => {
    const [inputName,setInputName] = useState("");
    const [inputAmount,setInputAmount] = useState("");
    const [inputDate,setInputDate] = useState("");

    const nameChangeHandler = (event) =>{
        setInputName(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setInputAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setInputDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        const costData ={
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }
    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input onChange={amountChangeHandler} value={inputAmount} type='number' min='0.01' step='0.01'/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input onChange={dateChangeHandler} value={inputDate} type='date' min="2019-01-01" step="2023-12-31"/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить расход</button>
                <button type='submit' onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>
}
export default CostForm;