import { useState } from "react";

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/styles/ChartsContainer';


const ChartsContainer = ({data}) => {
  const [barChart, setBarChart] = useState(true)
  return <Wrapper>
    <h4>Monthly Application</h4>
    <button className="button" type ='button' onClick={ ()=> setBarChart(!barChart)}>
      {barChart? 'Go to Area Chart': 'Go to Bar Chart'}

    </button>
    {barChart? <BarChart data ={data} />:<AreaChart data={data}/>}
  </Wrapper>
   };

export default ChartsContainer