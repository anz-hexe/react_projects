
import './app-info.css';


const AppInfo = ({increased, employsses}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company N</h1>
            <h2>total number of employees:{employsses} </h2>
            <h2>The prize is received: {increased} </h2>
        </div>
    );
}

export default AppInfo