import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div className='sidebar'>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a className="navbar-brand" href="https://react.dev/">Employee Management System</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className='nav-link' to='/departments'>Departments</NavLink>
                    </li>
                  </ul>
              </div>
              <div className="navbar-brand">Dev Mode</div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent