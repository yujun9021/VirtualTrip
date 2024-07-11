import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      {/* 로그인 폼 추가 */}
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
