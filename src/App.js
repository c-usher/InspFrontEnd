import './App.css';
import { DefaultLayout } from './layout/Default_Layout';
import { Dashboard } from './pages/dashboard/dashboard_page';
import { LoginPage } from './pages/login/Login_Page'


function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <DefaultLayout>
        <Dashboard />
     </DefaultLayout>
    </div>
  );
}

export default App;
