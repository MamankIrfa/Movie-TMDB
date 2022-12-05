import React from 'react'
import Switch from '../../base/Switch'

function Section({ title, children }) {
  return (
    <section className='pt-[30px] relative'>
      <div className='flex  items-center gap-5 px-10'>
        <h2 className='font-semibold text-2xl'>{title}</h2>
        <Switch />
      </div>
      <div className='pt-5'>{children}</div>
    </section>
  )
}

export default Section
