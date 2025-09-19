import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fromPath = (location.state as { from?: string } | null)?.from || '/';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      // Simulate an auth call
      await new Promise((resolve) => setTimeout(resolve, 800));
      // In a real app, store auth token/user in context/state here
      navigate(fromPath, { replace: true });
    } catch (error) {
      setErrorMessage('Failed to sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6 text-center">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CE</span>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Sign in to CivicEye</h1>
          <p className="mt-1 text-gray-500 text-sm">Report and track civic issues in your city</p>
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700 border border-red-200">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <Link to="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</Link>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-md bg-blue-600 text-white py-2.5 font-medium transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="#" className="text-blue-600 hover:text-blue-500 font-medium">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



