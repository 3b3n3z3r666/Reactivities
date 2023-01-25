import React, {useEffect } from 'react';
import './styles.css';
import {Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './loadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore(); 

  useEffect(()=> {
    activityStore.loadActivities()
  }, [activityStore]);

  
  // if (loading) return <LoadingComponent content='Loading app' /> 
  return (
    activityStore.loadingInitial ? <LoadingComponent content='Loading app' /> :
    <>
      <NavBar />
      <Container style={{marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
      
    </>
  );
}

export default observer(App);
