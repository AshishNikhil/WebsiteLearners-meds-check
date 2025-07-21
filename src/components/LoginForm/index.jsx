import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { supabase } from '../../supabaseClient'

const Login = () => {
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [whoami, setWhoami] = useState('')
  const [popupVisible, setPopupVisible] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const history = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const loginFormPatient = () => {
    setWhoami('Patient')
    setIsSignUp(false)
    setPopupVisible(true)
  }

  const loginFormCaretaker = () => {
    setWhoami('Caretaker')
    setIsSignUp(false)
    setPopupVisible(true)
  }

  const onSubmitSuccess = (user) => {
    Cookies.set('jwt_token', user.id, { expires: 10 })
    localStorage.setItem('whoami', whoami)
    history('/')
  }

  const onSubmitFailure = (error) => {
    setShowSubmitError(true)
    setErrorMsg(error.message || 'Something went wrong')
  }

  const submitForm = async ({ username, password }) => {
    setShowSubmitError(false)
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({ email: username, password })
        if (error) throw error
        onSubmitSuccess(data.user)
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email: username, password })
        if (error) throw error
        onSubmitSuccess(data.user)
      }
      reset()
    } catch (error) {
      onSubmitFailure(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20">
      <div className="flex flex-col items-center text-center">
        <img src="/img/heart-Bj9ZTo3Y.svg" alt="MediCare Companion Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-4xl font-bold">Welcome to MediCare Companion</h1>
        <p className="text-lg text-slate-500 max-w-xl">
          Your trusted partner in medication management. Choose your role to get started with personalized features.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20 text-center">
        <div className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg rounded-xl p-6 w-80 transition-shadow">
          <img src="/img/patient.png" alt="Patient" className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-blue-600">I'm a Patient</h2>
          <p className="text-sm text-gray-700 mb-3">Track your medication schedule and maintain your health records</p>
          <ul className="text-sm text-gray-800 text-left list-disc pl-5 mb-4">
            <li>Mark medications as taken</li>
            <li>Upload proof photos (optional)</li>
            <li>View your medication calendar</li>
            <li>Large, easy-to-use interface</li>
          </ul>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={loginFormPatient}
          >
            Continue as Patient
          </button>
        </div>

        <div className="bg-white border border-gray-200 hover:border-green-200 hover:shadow-lg rounded-xl p-6 w-80 transition-shadow">
          <img src="/img/caretaker.png" alt="Caretaker" className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-green-700">I'm a Caretaker</h2>
          <p className="text-sm text-gray-700 mb-3">Monitor and support your loved ones medication adherence</p>
          <ul className="text-sm text-gray-800 text-left list-disc pl-5 mb-4">
            <li>Monitor medication compliance</li>
            <li>Set up notification preferences</li>
            <li>View detailed reports</li>
            <li>Receive email alerts</li>
          </ul>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
            onClick={loginFormCaretaker}
          >
            Continue as Caretaker
          </button>
        </div>
      </div>

      <p className="mt-6 text-gray-500 text-sm">You can switch between roles anytime after setup</p>

      {popupVisible && (
        <div className="mt-10 w-full max-w-sm bg-white border border-gray-200 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
            {isSignUp ? 'Sign Up' : 'Login'} as {whoami}
          </h2>

          <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
            <div className="flex flex-col text-left space-y-2">
              <label htmlFor="username" className="font-medium text-sm">Email:</label>
              <input
                type="email"
                id="username"
                placeholder="example@email.com"
                className="border border-gray-300 px-3 py-2 rounded-md"
                {...register('username', { required: 'Email is required' })}
              />
              {errors.username && <p className="text-red-600 text-sm">*{errors.username.message}</p>}

              <label htmlFor="password" className="font-medium text-sm">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border border-gray-300 px-3 py-2 rounded-md"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Minimum 6 characters required' },
                })}
              />
              {errors.password && <p className="text-red-600 text-sm">*{errors.password.message}</p>}
            </div>

            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded">
                {isSignUp ? 'Sign Up' : 'Login'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setPopupVisible(false)
                  reset()
                }}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSignUp((prev) => !prev)
                reset()
              }}
              className="text-blue-600 hover:underline text-sm mt-2"
            >
              {isSignUp ? 'Already have an account? Login' : 'New user? Sign up'}
            </button>

            {showSubmitError && <p className="text-red-600 text-sm mt-2">*{errorMsg}</p>}
          </form>
        </div>
      )}
    </div>
  )
}

export default Login
