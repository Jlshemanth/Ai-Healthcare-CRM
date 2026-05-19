function LoginPage({ onLogin }) {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-rose-100">

      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-pink-100">

        <h1 className="text-5xl font-bold text-pink-700 mb-3 text-center">
          HCP AI CRM
        </h1>

        <p className="text-gray-500 text-center mb-10">
          AI-Powered Healthcare CRM Platform
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-pink-200 p-4 rounded-2xl mb-5 focus:outline-none focus:ring-4 focus:ring-pink-100"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border border-pink-200 p-4 rounded-2xl mb-6 focus:outline-none focus:ring-4 focus:ring-pink-100"
        />

        <button
          onClick={onLogin}
          className="w-full bg-pink-600 hover:bg-pink-700 transition text-white py-4 rounded-2xl font-semibold text-lg shadow-lg"
        >
          Sign In
        </button>

      </div>

    </div>

  )
}

export default LoginPage