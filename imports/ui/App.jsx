import React from 'react';
import Auth from './components/Auth/Auth';
import VaiuNavBar from './components/VaiuNavBar';
import { useTracker } from 'meteor/react-meteor-data';
import Transactions from './components/Transaction/Transactions';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  return (
    <>
      <VaiuNavBar />
      <main className='container-fluid my-5'>
        {user
          ? <><div className="user" onClick={logout}>
            {user?.username} 🚪
          </div>
            <Transactions />
          </>
          : <Auth />
        }
      </main>
    </>
  )
};
