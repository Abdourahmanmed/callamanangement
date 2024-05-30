

import { signIn } from '@/auth';
import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <form
          className="space-y-6"
          action={async () => {
            "use server"
            await signIn("github");
          }}
        >
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue hover:bg-blue/80 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Sign in with GitHub
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
