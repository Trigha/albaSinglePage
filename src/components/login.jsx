import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const formData = {
      email: username,
      password: password,
    };
    if (username != 'eve.holt@reqres.in') {
      console.log('email tidak sesuai');
    } else {
      const token = localStorage.getItem('token');
      axios
        .post('https://reqres.in/api/login', formData)
        .then(({ data }) => {
          setTimeout(() => {
            <Link to="#" />;
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
  };
  console.log(username, 'name');
  console.log(password, 'password');

  return (
    <div>
      <div class="bg-gray-10 ">
        <div class="flex justify-center h-screen w-screen items-center">
          <div class="w-full md:w-1/2 flex flex-col items-center ">
            <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">
              LOGIN
            </h1>

            <div class="w-3/4 mb-6">
              <input
                type="email"
                name="email"
                id="email"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                placeholder="User Name"
              />
            </div>

            <div class="w-3/4 mb-6">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                placeholder="Password"
              />
            </div>

            <div class="w-3/4 flex flex-row justify-between">
              <div class=" flex items-center gap-x-1">
                <input
                  type="checkbox"
                  name="remember"
                  id=""
                  class=" w-4 h-4  "
                />
                <label for="" class="text-sm text-slate-400">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" class="text-sm text-slate-400 hover:text-blue-500">
                  Forgot?
                </a>
              </div>
            </div>

            <div class="w-3/4 mt-4">
              <button
                onClick={handleSubmit}
                class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              >
                {' '}
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
