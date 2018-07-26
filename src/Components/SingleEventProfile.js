import React from 'react'

const EventProfile = ({event}) => {
  return (
    <div className="list-group-item">
      <p>acct_type: {event.acct_type}</p>
      <p>approx_payout_date: {event.approx_payout_date}</p>
      <p>body_length: {event.body_length}</p>
      <p>channels: {event.channels}</p>
      <p>Company: {event.company}</p>
      <p>currency: {event.currency}</p>
      <p>delivery_method: {event.delivery_method}</p>
      <p>description: {event.description}</p>
      <p>email_domain: {event.email_domain}</p>
      <p>event_created: {event.event_created}</p>
      <p>event_end: {event.event_end}</p>
      <p>event_published: {event.event_published}</p>
      <p>event_start: {event.event_start}</p>
      <p>fb_published: {event.fb_published}</p>
      <p>has_analytics: {event.has_analytics}</p>
      <p>has_header: {event.has_header}</p>
      <p>has_logo: {event.has_logo}</p>
      <p>listed: {event.listed}</p>
      <p>name: {event.name}</p>
      <p>name_length: {event.name_length}</p>
      <p>object_id: {event.object_id}</p>
      <p>org_desc: {event.org_desc}</p>
      <p>org_facebook: {event.org_facebook}</p>
      <p>org_name: {event.org_name}</p>
      <p>org_twitter: {event.org_twitter}</p>
      <p>payee_name: {event.payee_name}</p>
      <p>payout_type: {event.payout_type}</p>
      {/* <p>previous_payouts: {event.previous_payouts}</p> */}
      <p>sale_duration: {event.sale_duration}</p>
      <p>show_map: {event.show_map}</p>
      <p>user_age: {event.user_age}</p>
      <p>user_created: {event.user_created}</p>
      <p>user_type: {event.user_type}</p>
      <p>venue_address: {event.venue_address}</p>
      <p>venue_country: {event.venue_country}</p>
      <p>venue_latitude: {event.venue_latitude}</p>
      <p>venue_longitude: {event.venue_longitude}</p>
      <p>venue_name: {event.venue_name}</p>
      <p>venue_state: {event.venue_state}</p>
    </div>
  )
}

export default EventProfile
