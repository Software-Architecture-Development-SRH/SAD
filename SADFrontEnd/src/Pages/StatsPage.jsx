import { ChartsContainer, StatsContainer } from "../components";
import customFetch2 from "../Utils/customFetch2";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
try {
  const response = await customFetch2.get('/jobs/stats')
  
  return response.data;
  
} catch (error) {
  return error;
  
}
};

const StatsPage = () => {
  const {defaultStats, monthlyApplications} = useLoaderData();
console.log(defaultStats);
  return ( 
  <>
  <StatsContainer defaultStats={defaultStats}/>
  
    {monthlyApplications?.length >1 && (
      <ChartsContainer data ={monthlyApplications} />
   )} 
  </>
  );
};

export default StatsPage;
