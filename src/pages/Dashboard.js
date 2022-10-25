import { useEffect, useState } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore";



function Dashboard() {
  const [sleepData, setSleepData] = useState([])
  const sleepDataCollectionRef = collection(db, "sleepData")

  useEffect(() => {
    const getSleepData = async () => {
      const currData = await getDocs(sleepDataCollectionRef);
      setSleepData(currData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    }; 
    getSleepData(); 
  }, []);

  const data = sleepData.map(item => {
    const container = {};
    container.x = item.sleeping;
    container.y = item.studying;
    container.z = item.mood; 
    return container; 
  })
  
  return (
    <div>
      <div class="text-center text-2xl mt-8 font-medium">Sleep Data Findings</div>
    <div class="flex justify-center mx-auto mt-8 w-full max-w-2xl">
      <div class="border-2 border-slate-300 rounded px-8 pt-6 pb-8 mb-4">
      <div class="text-lg">Hours Slept vs Hours Studied (Average per Day)</div>
      <div>
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20,}}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Hours slept" unit="hr"><Label value="Avg daily sleep" offset={-2} position="bottom" /></XAxis>
          <YAxis type="number" dataKey="y" name="Hours studied" unit="hr">
          <Label value="Avg daily studying" angle={-90} position="left" offset={0}/></YAxis>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Mood" data={data} fill="#8884d8" />
        </ScatterChart>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard