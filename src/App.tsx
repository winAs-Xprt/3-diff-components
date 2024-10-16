import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getUsers } from './redux/userSlice';
import './App.css';


import ClientResentResponseComponent from './components/ClientResentResponse';
import EstPendingApprovalResultComponent from './components/EstPendingApprovalResult';
import WinLostGraphDataComponent from './components/WinLostGraphData';

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <ClientResentResponseComponent data={user.clientResentResponse} />
      <EstPendingApprovalResultComponent data={user.estPendingApprovalResult} />
      <WinLostGraphDataComponent data={user.winLostGraphData} />
    </div>
  );
}

export default App;
