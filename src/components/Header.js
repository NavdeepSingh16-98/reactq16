import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" >
                Task Manager
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a >Task Management App by Navdeep Singh</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;