
import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        all employees
      </button>

      <button className="btn btn-outline-light" type="button">
      for promotion
      </button>

      <button className="btn btn-outline-light" type="button">
      salary over 1000
      </button>
    </div>
  );
};

export default AppFilter;