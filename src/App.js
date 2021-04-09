import './App.css';
import Profile from './profile/Profile';

function App() {
  const StyleObject={height:200, width:200}
  return (
    <div className="App">
     <Profile FullName="Rekhis Amir" bio="homme" >
     <img style={StyleObject} src="./profile.jpg" alt="profile"/>
     </Profile>
    </div>
  );
}

export default App;
