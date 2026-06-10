import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card name='Orange' age={150} img='https://images.unsplash.com/photo-1778452419724-1f605dc17c46?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name='Tangoon' age={200} img='https://images.unsplash.com/photo-1780914436173-b2f01cfeff78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name='Chudail' age='Sexy' img='https://plus.unsplash.com/premium_photo-1780856335400-b53fb632200f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    </div>
  )
}

export default App