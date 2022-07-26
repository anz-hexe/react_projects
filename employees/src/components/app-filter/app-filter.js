import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsDate = [
    { name: "all", label: "all employees" },
    { name: "rise", label: "for promotion" },
    { name: "more1000", label: "salary over 1000" },
  ];
  const buttons = buttonsDate.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button className={`btn ${clazz}`} type="button" key={name} onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
