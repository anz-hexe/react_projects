import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

const data = [
    {name:"John", salary: 800, increase: false, key: 1},
    {name:"Alex", salary: 1000, increase: true, key: 2},
    {name:"Carl", salary: 1200, increase: false, key: 3},
];

function App() {
    return (
<div className="app">
    <AppInfo/>

    <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>

    </div>

    <EmployeesList data={data}/>
    <EmployeesAddForm/>
</div>
    );
}

export default App;