'use client'
import Layout from '../../components/Layout/page'
import { useState } from 'react'
import { SignContext } from '../../contexts/SignContext'


export default function AddListing() {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  return (
    <SignContext.Provider value={{
      toggleCollapse, setToggleCollapse
    }}>
      <Layout/>
    </SignContext.Provider>
  )
}
