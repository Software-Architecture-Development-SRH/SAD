import { useLoaderData, redirect } from 'react-router-dom';
import customFetch2 from '../Utils/customFetch2';
import Wrapper from '../assets/styles/StatsContainer';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const response = await customFetch2.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('Sorry you are not authorized to view this page !');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return <Wrapper>
    <h1>admin page</h1>
  </Wrapper>;
};
export default Admin;