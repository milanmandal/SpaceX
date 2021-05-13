import React,{useEffect,useState} from 'react'
import Missions from './components/missions'
import './App.css'
const App=()=> {

  const [info,Setinfo] = useState([]);
  const [year,Setyear] = useState('0');
  const [launch,Setlaunch] = useState('true');
  const [land,Setland] = useState('false');
  useEffect(()=>{
    getevent();
  },[year]);

  const getevent=async()=>{
    if(year!=0){
      const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_launch=${launch}&launch_land=${land}&launch_year=${year}`) //search page
      const data = await res.json();
      (data!="")?Setinfo(data):window.alert("NO Missions Found");
    }
    else{
      const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`) //search page
      const data = await res.json();
      (data!="")?Setinfo(data):window.alert("NO mIssions Found");
    }
      
  }

  const updateYear =(e)=>{
    Setyear(e.target.value);
    getevent();
  }
  const updateLaunch =(e)=>{
    Setlaunch(e.target.value);
    getevent();
  }
  const updateLand =(e)=>{
    Setland(e.target.value);
    getevent();
  }

  return (
    <div className="container">
      <h3>SPACEX LAUNCH PROGRAMS</h3>
      <div className="column1">
        <div className="btn">
          <h3>Filters</h3>
        <p>Launch year</p>
          <button value="2006" onClick={updateYear}>2006</button>
          <button value="2007" onClick={updateYear}>2007</button>
          <button value="2008" onClick={updateYear}>2008</button>
          <button value="2009" onClick={updateYear}>2009</button>
          <button value="2010" onClick={updateYear}>2010</button>
          <button value="2011" onClick={updateYear}>2011</button>
          <button value="2012" onClick={updateYear}>2012</button>
          <button value="2013" onClick={updateYear}>2013</button>
          <button value="2014" onClick={updateYear}>2014</button>
          <button value="2015" onClick={updateYear}>2015</button>
          <button value="2016" onClick={updateYear}>2016</button>
          <button value="2017" onClick={updateYear}>2017</button>
          <button value="2018" onClick={updateYear}>2018</button>
          <button value="2019" onClick={updateYear}>2019</button>
          <button value="2020" onClick={updateYear}>2020</button>
        <p>Launch Success</p>
        <div className="btn2">
        <button value="true" onClick={updateLaunch}>True</button>
        <button value="false" onClick={updateLaunch}>False</button>
        </div>
        <p>Land Success</p>
        <div className="btn3">
        <button value="true" onClick={updateLand}>True</button>
        <button value="false" onClick={updateLand}>False</button>
        </div>
        </div>
      </div>   

      <div className="column2">
      <div className="mission-card">
      {
        info.map(mission =>(
        <Missions
        ids = {mission.mission_id} 
        fno = {mission.flight_number} 
        name = {mission.mission_name}
        year = {mission.launch_year}
        launch = {mission.launch_success}
        land = {mission.rocket.first_stage.cores.land_success}
        img = {mission.links.mission_patch_small}
        />
        ))
      }
      </div>
      
      </div>
      <footer>
        <p>Developed by : Milan Mandal</p>
      </footer>

    </div>
  )
}

export default App;
