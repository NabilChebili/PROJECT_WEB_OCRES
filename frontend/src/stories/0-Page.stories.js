import React from 'react';
import Page from '../Principale/App.js';
import PageAdmin from '../Admin/Admin.js';

export default {
  title: 'Page',
};

export const Dashboard = () => <Page/>;

export const Admin = () => <PageAdmin/>;


