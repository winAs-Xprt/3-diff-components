import React from 'react';
import { WinLostGraphData } from '../redux/userSlice';

interface WinLostGraphDataProps {
  data: WinLostGraphData | null;
}

const WinLostGraphDataComponent: React.FC<WinLostGraphDataProps> = ({ data }) => {
  return (
    <div className="card graph-data">
      <h2>Win/Lost Graph Data:</h2>
      {data && (
        <div>
          <h2>Current Win Count: {data.current_win_count}</h2>
          <h2>Current Lost Count: {data.current_lost_count}</h2>
          <h2>Previous Win Count: {data.previous_win_count}</h2>
          <h2>Previous Lost Count: {data.previous_lost_count}</h2>
          <h2>Current Win Amount: {data.current_win_amount}</h2>
          <h2>Current Lost Amount: {data.current_lost_amount}</h2>
          <h2>Previous Win Amount: {data.previous_win_amount}</h2>
          <h2>Previous Lost Amount: {data.previous_lost_amount}</h2>
          <h2>Current Total Amount: {data.current_total_amount}</h2>
          <h2>Previous Total Amount: {data.previous_total_amount}</h2>
          <h2>Current Total Count: {data.current_total_count}</h2>
          <h2>Previous Total Count: {data.previous_total_count}</h2>
        </div>
      )}
    </div>
  );
};

export default WinLostGraphDataComponent;
