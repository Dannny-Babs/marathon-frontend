import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', email: '', password: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle registration logic
    navigate('/onboarding');
  };


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </header>
    </div>

    
  )
}

export default App

