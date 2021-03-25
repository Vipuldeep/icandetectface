import React from 'react';

const Signin = ({ onRouteChange }) => {
  return(
    <div>
    <main className="pa4 black-80 ">
    <form className="center br3 shadow-2 pa4 dib">
        {/* </div>
        </fieldset> */}
        <div className="lh-copy mt3">
            <input
              onClick={() => onRouteChange('home')}
              className='buttonid'
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <input
              onClick={() => onRouteChange('register')}
              className='buttonid'
              type="submit"
              value="Sign up"
            />
            </div>
    </form>
    </main>
    </div>
  );
}

export default Signin;