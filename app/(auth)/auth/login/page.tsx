"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function LoginPage() {
  const [state, formAction] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={formAction} className="space-y-4 w-full max-w-md">
        {state?.error && (
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
            {state.error}
          </div>
        )}

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}