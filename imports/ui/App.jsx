import React from 'react';
import Auth from './components/Auth/Auth';
import VaiuNavBar from './components/Utils/VaiuNavBar';
import { useTracker } from 'meteor/react-meteor-data';
import Transactions from './components/Transaction/Transactions';

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <>
      <VaiuNavBar user={user} />
      <main className='container-fluid my-2'>
        {user
          ?
          <Transactions />
          : <Auth />
        }
      </main>
    </>
  )
};
