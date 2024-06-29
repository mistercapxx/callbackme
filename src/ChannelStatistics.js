import React, { useContext } from 'react'
import { ContactContext } from './App';

function ChannelStatistics() {

  // NOTE: use Context to get info about entered contacts

  const { contacts,lastChannel } = useContext(ContactContext);


  return (
    <p  data-testid="statistics">
      count of channels:{contacts.length} <br />
      'your last channel is:{lastChannel} '
    </p>
  )
}

export default ChannelStatistics