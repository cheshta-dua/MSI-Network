import react, {useEffect} from 'react';
import { useNavigate } from 'react-router';

export default function Secure({component, dat}) {
  const navigate = useNavigate();
  const data = localStorage.getItem('User');
  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
  },[]);

  if(!dat)
    return <component />;
  else 
    return <component data={dat} />;
}