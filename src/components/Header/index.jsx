import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { supabase } from '../../supabaseClient'

const Header = () => {
  const navigate = useNavigate()

  const logout = async () => {
    await supabase.auth.signOut()
    Cookies.remove('jwt_token')
    localStorage.removeItem('jwt_cookie')
    localStorage.removeItem('whoami')
    navigate('/login')
  }

  const whoami = localStorage.getItem('whoami')

  return (
    <div className="bg-white flex justify-between items-center px-6 py-3 mb-20 shadow-sm pl-5">
      <div className="flex items-center">
        <div className="w-15 h-15 mr-4">
          <img
            src="/img/heart-Bj9ZTo3Y.svg"
            alt="MediCare Companion Logo"
            className="w-15 h-15"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">MediCare Companion</h1>
          <p className="text-sm text-gray-600">{whoami}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={logout}
        className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-2 px-4 rounded transition-all"
      >
        Logout
      </button>
    </div>
  )
}

export default Header
