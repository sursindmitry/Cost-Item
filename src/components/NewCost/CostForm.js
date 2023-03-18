import './CostForm.css'

const CostForm = () => {
    return <form className="new-cost__controls">
        <div className="new-cost__control">
            <div>Название</div>
            <input type='text'/>
        </div>
        <div className="new-cost__control">
            <div>Сумма</div>
            <input type='number' min='0.01' step='0.01'/>
        </div>
        <div className="new-cost__control">
            <div>Сумма</div>
            <input type='date' min='2019-01-01' step='2023-12-31'/>
        </div>
        <div className='new-cost__actions'>
            <button type='submit'>Добавить</button>
        </div>
    </form>
}
export default CostForm;