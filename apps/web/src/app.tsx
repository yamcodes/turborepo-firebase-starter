import { useEffect, useState } from 'react';
import { iLikeTurtles } from 'utilities';
import './App.css';

export const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    void fetch('/api/legacy')
      .then((res) => res.json())
      .then((res) => {
        // TODO: we need a stronger contract with the backend
        setData(res as Record<string, unknown>);
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="icon-wrap">
          <img className="icon-firebase" src="/firebase.svg" alt="firebase" />
          <div className="icon-divider">+</div>
          <img className="icon-turbo" src="/turborepo.svg" alt="turborepo" />
        </div>
        <div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: 'bold' }}>From apps/api (api)</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: 'bold' }}>
              From packages/utilities (utilities)
            </p>
            <pre>{JSON.stringify(iLikeTurtles())}</pre>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: 'bold' }}>GitHub</p>
            <a
              style={{ color: 'lightblue' }}
              href="https://github.com/yamcodes/turborepo-firebase-starter"
            >
              https://github.com/yamcodes/turborepo-firebase-starter
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
