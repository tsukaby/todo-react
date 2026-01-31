import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  // NOTE: As written, this function has a bug: it doesn't prevent the user
  // from submitting an empty form. This is left as an exercise for developers
  // working through MDN's React tutorial.
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name, priority, dueDate);
    setName("");
    setPriority('medium');
    setDueDate('');
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }

  function handleDateChange(event) {
    setDueDate(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />

      <div className="form-group">
        <label htmlFor="priority-select" className="label__lg">
          Priority
        </label>
        <select
          id="priority-select"
          className="input input__lg"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="due-date-input" className="label__lg">
          Due Date
        </label>
        <input
          type="date"
          id="due-date-input"
          className="input input__lg"
          value={dueDate}
          onChange={handleDateChange}
        />
      </div>

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
