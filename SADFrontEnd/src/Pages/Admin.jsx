import { useLoaderData, redirect } from 'react-router-dom';
import customFetch2 from '../Utils/customFetch2';
import Wrapper from '../assets/styles/StatsContainer';
import { toast } from 'react-toastify';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { StatItem } from '../components';

export const loader = async () => {
  try {
    const response = await customFetch2.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('Sorry you are not authorized to view this page !');
    return redirect('/dashboard');
  }
};

//Created cards for admin to see the number of users logged in and number of jobs created

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return <Wrapper>
    <StatItem 
    title='current users' 
    count={users}
    color='#e9b949' 
    bcg='#fcefc7' 
    icon={<FaSuitcaseRolling />}
    />
    <StatItem 
    title='total jobs' 
    count={jobs}
    color='#647acb' 
    bcg='#e0e8f9' 
    icon={<FaCalendarCheck />}
    />
  </Wrapper>;
};
export default Admin;