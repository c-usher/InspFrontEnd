import './App.css';
 import { DefaultLayout } from './layout/Default_Layout';
// import { Dashboard } from './pages/dashboard/dashboard_page';
// import { LoginPage } from './pages/login/Login_Page'
// import { AddUnit } from './pages/new-unit/Add_Unit_page';
import { ShowUnitsPage } from './pages/show_units/Show_Units_Page';


function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
      {/* <AddUnit /> */}
      <ShowUnitsPage />
     </DefaultLayout>
    </div>
  );
}

export default App;
