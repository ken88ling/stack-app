/**
 *
 * NavBar
 *
 */

import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-container__row">
          <div className="logo">
            <svg
              width="34"
              height="41"
              viewBox="0 0 34 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17.037V0.222229L16.4444 12.0741V17.5556L4.66667 8.8889V14.6667L16.4444 23.3333V28.963L0 17.037Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M17.5555 17.4815V12.1481L34 0V5.62963L17.5555 17.4815Z"
                fill="url(#paint1_linear)"
              />
              <path
                d="M17.4815 28.963V23.3333L34 11.4074V28.1482L17.4815 40.1482V34.7407L29.4074 26V20.2963L17.4815 28.963Z"
                fill="url(#paint2_linear)"
              />
              <path
                d="M0 28.2963V22.6667L16.4444 34.5185V40.2222L0 28.2963Z"
                fill="url(#paint3_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="8.22222"
                  y1="0.222229"
                  x2="8.22222"
                  y2="28.963"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A9E9" />
                  <stop offset="1" stopColor="#0D4EA2" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="25.7778"
                  y1="0"
                  x2="25.7778"
                  y2="17.4815"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A9E9" />
                  <stop offset="1" stopColor="#0D4EA2" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="25.7408"
                  y1="11.4074"
                  x2="25.7408"
                  y2="40.1482"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A9E9" />
                  <stop offset="1" stopColor="#0D4EA2" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="8.22222"
                  y1="22.6667"
                  x2="8.22222"
                  y2="40.2222"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A9E9" />
                  <stop offset="1" stopColor="#0D4EA2" />
                </linearGradient>
              </defs>
            </svg>
            <span className="nav-container__header">
              Stack<span>Quest</span>
            </span>
          </div>
          <div className="menu">
            <a href="/">Login</a>
            <a className="sign-up" href="/">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

NavBar.propTypes = {};

export default NavBar;
