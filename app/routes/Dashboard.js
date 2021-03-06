import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import {Products} from '../components';
import {
    Page, 
} 
    from '@shopify/polaris';

    const client = new ApolloClient({
      fetchOptions: {
        credentials: 'include',
      },
    });

    export default function Dashboard() {
    

      return (
        <Page
        title="Dashboard"
      >
      <ApolloProvider client={client}> 
      <Products/>
      </ApolloProvider>
        </Page>
      );
    }


  

