import { useState } from 'react';

function App() {
  const [page, setPage] = useState('login');
  const [loginAs, setLoginAs] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  // Login function
  function login() {
    if (loginAs === 'student' && username === 'aabir' && password === '123') {
      setCurrentUser('Aabir Bhowmik');
      setPage('home');
    } else if (loginAs === 'parent' && username === 'parent' && password === '123') {
      setCurrentUser('Parent of Aabir');
      setPage('home');
    } else {
      alert('Wrong username or password');
    }
  }

  // Logout function
  function logout() {
    setPage('login');
    setUsername('');
    setPassword('');
    setCurrentUser('');
  }

  // Login Page
  if (page === 'login') {
    return (
      <div>
        <h1>Student Management System</h1>
        <h2>Login</h2>
        
        <p>Login as:</p>
        <input type="radio" name="type" value="student" onChange={() => setLoginAs('student')} checked={loginAs === 'student'} />
        <label>Student</label>
        <br />
        <input type="radio" name="type" value="parent" onChange={() => setLoginAs('parent')} checked={loginAs === 'parent'} />
        <label>Parent</label>
        
        <br /><br />
        
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        
        <button onClick={login}>Login</button>
        
        <p>Student Login: aabir / 123</p>
        <p>Parent Login: parent / 123</p>
      </div>
    );
  }

  // Home Page
  if (page === 'home') {
    return (
      <div>
        <h1>Welcome {currentUser}</h1>
        <button onClick={logout}>Logout</button>
        <br /><br />
        
        <button onClick={() => setPage('timetable')}>View Timetable</button>
        <br />
        <button onClick={() => setPage('attendance')}>View Attendance</button>
        <br />
        <button onClick={() => setPage('results')}>View Results</button>
      </div>
    );
  }

  // Timetable Page
  if (page === 'timetable') {
    return (
      <div>
        <h1>Timetable</h1>
        <button onClick={() => setPage('home')}>Back</button>
        
        <h3>Monday</h3>
        <p>9-10: Python</p>
        <p>10-11: Java</p>
        <p>11-12: React</p>
        
        <h3>Tuesday</h3>
        <p>9-10: Java</p>
        <p>10-11: Python</p>
        <p>11-12: React</p>
        
        <h3>Wednesday</h3>
        <p>9-10: React</p>
        <p>10-11: Python</p>
        <p>11-12: Java</p>
        
        <h3>Thursday</h3>
        <p>9-10: React</p>
        <p>10-11: Java</p>
        <p>11-12: Python</p>
        
        <h3>Friday</h3>
        <p>9-10: English</p>
        <p>10-11: React</p>
        <p>11-12: Java</p>
      </div>
    );
  }

  // Attendance Page
  if (page === 'attendance') {
    return (
      <div>
        <h1>Attendance</h1>
        <button onClick={() => setPage('home')}>Back</button>
        
        <h3>Attendance Record</h3>
        <p>Total Days: 100</p>
        <p>Present: 85 days</p>
        <p>Absent: 15 days</p>
        <p>Percentage: 85%</p>
      </div>
    );
  }

  // Results Page
  if (page === 'results') {
    return (
      <div>
        <h1>Results</h1>
        <button onClick={() => setPage('home')}>Back</button>
        
        <h3>Semester 1</h3>
        <p>Python: 85</p>
        <p>English: 78</p>
        <p>Java: 92</p>
        <p>React: 88</p>
        <p><strong>Average: 85.75</strong></p>
        
        <h3>Semester 2</h3>
        <p>Python: 90</p>
        <p>English: 82</p>
        <p>Java: 88</p>
        <p>React: 85</p>
        <p><strong>Average: 86.25</strong></p>
      </div>
    );
  }
}

export default App;