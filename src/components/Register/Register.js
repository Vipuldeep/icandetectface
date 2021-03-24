import React from 'react';

const Register = ({onRouteChange}) => {
  return (
    <div>
    <main className="pa4 black-80 ">
    <form className="center br3 shadow-2 pa4 dib">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0 center">Sign Up</legend>
        <div className="mt3">
            <label className="db fw6 lh-copy f6" for="name">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-orange w-100" type="name" name="name"  id="name" placeholder="Your Name" />
        </div>
        <div className="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-orange w-100" type="email" name="email-address"  id="email-address" placeholder="Your Email Address" />
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6" for="password" >Password</label>
            <input className="pa2 input-reset ba bg-transparent hover-orange w-100" type="password" name="password"  id="password" placeholder="Your Password" />
        </div>
        </fieldset>
        <div className="lh-copy mt3">
            {/* error */}
        <input className='' type="submit" value="Sign in" onClick={() => onRouteChange('signIn')}/>
        </div>
    </form>
    </main>
    </div>
  );
};

export default Register;
