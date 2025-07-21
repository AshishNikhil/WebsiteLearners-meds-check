import {useState} from 'react'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'
import './index.css'

const PatientView = () => {
  const [marked, setMarked] = useState(false)

  const handleMarkAsTaken = () => {
    setMarked(true)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 w-1/2 rounded-xl flex flex-col p-7">
        <div className="flex flex-row justify-start">
          <div>
            <img
              className="mt-1 mr-6 w-20 h-20"
              src="/img/patient.png"
              alt="imagelogo"
            />
          </div>
          <div className='mt-3'>
            <h1 className="text-white font-bold text-xl">
              Good Afternoon!
            </h1>
            <p className="text-white">
              Ready to stay on track with your medication?
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-3 mt-6">
          <div className="bg-white/30 rounded-xl p-3 w-[400px]">
            <h1 className="text-white text-2xl">0</h1>
            <p className="text-white text-lg">Day Streak</p>
          </div>
          <div className="bg-white/30 rounded-xl p-3 w-[400px]">
            <h1 className="text-white text-2xl">○</h1>
            <p className="text-white text-lg">Today`s Status</p>
          </div>
          <div className="bg-white/30 rounded-xl p-3 w-[400px]">
            <h1 className="text-white text-2xl">0%</h1>
            <p className="text-white text-lg">Monthly Rate</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center my-8">
        <div className="mr-14 p-6 bg-white rounded-xl w-[550px] flex flex-col shadow-md">
          <h1 className="text-xl mb-4">📅 Today`s Medication</h1>

          <div
             className={`flex flex-row justify-start items-center border border-gray-300 rounded-xl p-5 ${marked ? 'bg-green-50' : 'bg-white'}`}
          >
            <h2 className="bg-blue-300 rounded-full w-[50px] h-[50px] text-center text-blue-600 pt-2 text-xl mr-8">1</h2>
            <div>
              <h1 className="text-xl">Daily Medication Set</h1>
              <p className="text-gray-400">
                Complete set of daily tablets
              </p>
            </div>
            <div>
              <p className="p-1 rounded-xl w-[110px] h-[30px] text-center text-base ml-12 border border-gray-300">⌚ 8:00 AM</p>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center border border-dashed border-gray-300 rounded-xl p-5 mt-12 mb-12 ${marked ? 'bg-green-50' : 'bg-white'}`}
          >
            <img
              className="w-[100px] h-[100px]"
              src="/img/unnamed.png"
              alt="imagelogo"
            />
            <h1 className="text-base">Add Proof Photo (Optional)</h1>
            <p className="text-xs text-gray-400 text-center">
              Take a photo of your medication or pill organizer as confirmation
            </p>
            <input
              type="file"
              id="file-upload-input"
              className="hidden"
            />
            <label
              htmlFor="file-upload-input"
              className="cursor-pointer p-2 border border-gray-300 rounded-xl text-center mt-2"
            >
              📷 Take Photo
            </label>
          </div>

          <div className="flex flex-col">
            <button
              type="button"
              className="bg-green-700 rounded-lg text-white border-0 h-[42px]"
              onClick={handleMarkAsTaken}
            >
              ✔️ Mark as Taken
            </button>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl w-[350px] h-[600px] flex flex-col justify-evenly shadow-md">
          <h1 className="text-xl">Medication Calendar</h1>
          <CalendarComponent />
          <ul className="list-disc ml-6">
            <li className="unorder1">Medication taken</li>
            <li className="unorder2">Missed medication</li>
            <li className="unorder3">Today</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PatientView
