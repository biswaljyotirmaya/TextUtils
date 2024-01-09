import React from 'react';

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar bg-${props.theme}`}>
        <div className={`container-fluid d-flex align-middle text-${props.theme}`}>
          <div className='d-flex '>
            <a className={`navbar-brand  px-2  text-${props.textcolor}`} href='/'>Home</a>
            <a className={`navbar-brand px-2  text-${props.textcolor}`} href='/about'>About</a>
            <a className={`navbar-brand px-2 text-${props.textcolor}`} href=''>Bootstrap</a>
            <a className={`navbar-brand px-2  text-${props.textcolor}`} href=''>Link</a>
          </div>
          <form className="d-flex" role="search">
            <input className={`form-control me-2 text-${props.theme}`} type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-outline-danger mx-2 text-${props.textcolor}`} type="submit">Search</button>

            <div className="form-check form-switch mx-1">
              <input
                className="form-check-input"
                onClick={props.handleThemeGreen}
                type="checkbox"
                role="switch"
                id="greenSwitch"
              />
              <label className={`form-check-label text-${props.textcolor}`} htmlFor="greenSwitch">Green</label>
            </div>

            <div className="form-check form-switch mx-1">
              <input
                className="form-check-input"
                onClick={props.handleThemeRed}
                type="checkbox"
                role="switch"
                id="redSwitch"
              />
              <label className={`form-check-label text-${props.textcolor}`} htmlFor="redSwitch">Red</label>
            </div>

            <div className="form-check form-switch mx-1">
              <input
                className="form-check-input"
                onClick={props.handleThemeYellow}
                type="checkbox"
                role="switch"
                id="yellowSwitch"
              />
              <label className={`form-check-label text-${props.textcolor}`} htmlFor="yellowSwitch">Yellow</label>
            </div>

            <div className="form-check form-switch mx-1">
              <input
                className="form-check-input"
                onClick={props.handleTheme}
                type="checkbox"
                role="switch"
                id="lightDarkSwitch"
              />
              <label className={`form-check-label text-${props.textcolor}`} htmlFor="lightDarkSwitch">Light/Dark</label>
            </div>

            <div className="form-check form-switch mx-1">
              <label className={`form-check-label text-${props.textcolor}`} htmlFor="blackSwitch">Black</label>
              <input
                className="form-check-input"
                onClick={props.handleThemeBlack}
                type="checkbox"
                role="switch"
                id="blackSwitch"
              />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
