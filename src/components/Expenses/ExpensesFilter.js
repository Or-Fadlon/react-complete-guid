import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const selectChangeHandler = (event) => {
    props.onChangeYearFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={selectChangeHandler}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div></div>
    </div>
  );
}

export default ExpensesFilter;
