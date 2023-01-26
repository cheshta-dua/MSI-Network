import react, {useEffect} from 'react';
import { useNavigate } from 'react-router';

export default function Secure({component, dat}) {
  const navigate = useNavigate();
  const Component=component;
  const data = localStorage.getItem('User');
  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
  },[]);

  if(!dat)
    return <Component />;
  else 
    return <Component data={dat} />;
}