import React from 'react'
import Cal from "@calcom/embed-react";

const CalInlineEmbed = () => {
  return (
    <div>
      <div className='h-fit container mx-auto text-center'>
      <Cal className='max-w-180 mx-auto' calLink="wdunning/" calOrigin="https://cal.innovationsapplied.com" config={{ theme: "dark" }}></Cal>
      </div>
    </div>
  )
}

export default CalInlineEmbed

