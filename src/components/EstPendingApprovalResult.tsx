import React from 'react';
import { EstPendingApprovalResult } from '../redux/userSlice';

interface EstPendingApprovalResultProps {
  data: EstPendingApprovalResult[] | null;
}

const EstPendingApprovalResultComponent: React.FC<EstPendingApprovalResultProps> = ({ data }) => {
  return (
    <div className="card est-card">
      <h2>Est Pending Approval Result:</h2>
      {data?.map((est, index) => (
        <div key={index}>
          <h2>Company Estimate ID: {est.company_estimate_id}</h2>
          <h2>Client Icon: {est.client_icon}</h2>
          <h2>Full Name: {est.full_name}</h2>
          <h2>Submitted: {est.submitted}</h2>
          <h2>Expires: {est.expires}</h2>
          <h2>Amount: {est.amount}</h2>
        </div>
      ))}
    </div>
  );
};

export default EstPendingApprovalResultComponent;
