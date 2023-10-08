import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='PetnVet'>
        <span style={{color: 'white',fontWeight:'bold'}}>Pet</span>
        <span style={{color: 'yellow',fontWeight:'bold'}}>n</span>
        <span style={{color: 'white', fontWeight:'bold'}}>Vet</span>
      </div>
      <div className='icons'> 
      

      <div className='user'>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="" />
        <span>Admin</span>
      </div>
      <img src="/settings.svg" alt="" className='icon' />

      
      </div>
    </div>
  )
}

export default Navbar
