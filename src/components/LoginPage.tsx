import React from 'react';
import { Mail, Clock } from 'lucide-react';

interface LoginPageProps {
  onLogin: (method: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <Clock className="mx-auto h-24 w-24 text-indigo-600 dark:text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">TimeNest</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Manage your child's screen time</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={() => onLogin('email')}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <Mail className="mr-2 h-5 w-5" />
            Continue with Email
          </button>

          <button
            onClick={() => onLogin('google')}
            className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <img src="https://www.google.com/favicon.ico" className="mr-2 h-5 w-5" alt="Google" />
            Continue with Google
          </button>

          <button
            onClick={() => onLogin('admin')}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Clock className="mr-2 h-5 w-5" />
            Admin Access
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default LoginPage;