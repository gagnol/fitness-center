import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useContext, useReducer } from 'react';
import {  Box} from '@mui/material';
import { getError } from '../../utils/error';
import { Store } from '../../utils/Store';
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function AdminDashboard() {
  const { state } = useContext(Store);
  const router = useRouter();

  const { userInfo } = state;

  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/summary`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Box  sx={{display:'flex',marginTop:'100px'}}>
      <Sidebar />
      <Box  sx={{ flex:'6'}}>
        
        <Box  sx={{ display:'flex', padding: '20px',gap: '20px'}}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Box>
        <Box sx={{padding:'5px 20px',display:'flex'}}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </Box>
        <Box sx={{ boxShadow:' 2px 4px 10px 1px rgba(201, 201, 201, 0.47)', padding:'20px', margin: '20px'}}>
          <Box sx={{ fontWeight: 500, color: 'gray', marginBottom: '15px'}}>Latest Transactions</Box>
          <Table />
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default dynamic(() => Promise.resolve(AdminDashboard), { ssr: false });  