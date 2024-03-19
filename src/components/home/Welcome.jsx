export const Welcome = () => {
  return (
    <section>
      <div className="welcome-container">
        <h1 id="logo">Creature Feature</h1>
      </div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <button>Login</button>
      </div>
      <div>
        <h3>Don't have an account?</h3>
        <button>Create Account</button>
      </div>
    </section>
  );
};
