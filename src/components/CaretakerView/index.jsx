import { useState } from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

const CaretakerView = () => {
  const [activeTab, setActiveTab] = useState('Overview')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="flex flex-col mt-8">
            <div className="flex gap-4">
              <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[440px] h-[300px] p-4">
                <h2 className="text-[22px] font-semibold">📅 Today`s Status</h2>
                <div className="flex mt-4 bg-gray-50 rounded-lg p-2">
                  <div>
                    <p className="text-lg font-medium">Daily Medication Set</p>
                    <p className="text-gray-400">8:00 AM</p>
                  </div>
                  <button
                    type="button"
                    className="bg-red-600 text-white w-[100px] h-[30px] rounded ml-auto mt-6"
                  >
                    Pending
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[440px] h-[300px] p-4">
                <h2 className="text-[22px] font-semibold">Quick Actions</h2>
                <div className="flex flex-col mt-4 gap-4">
                  <button className="bg-white border-1 border-gray-300 rounded-lg p-2 text-left shadow-sm">
                    📧 Send Reminder Email
                  </button>
                  <button className="bg-white border-1 border-gray-300 rounded-lg p-2 text-left shadow-sm">
                    🔔 Configure Notifications
                  </button>
                  <button className="bg-white border-1 border-gray-300 rounded-lg p-2 text-left shadow-sm">
                    📅 View Full Calendar
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[900px] h-[170px] p-4 mt-8">
              <h2 className="text-[22px] font-semibold">Monthly Adherence Progress</h2>          
              <div className='flex justify-between items-center mt-2 mb-2'>
                <p>Overall Progress</p>
                <p>85%</p>
              </div>
              <div className="w-[865px] rounded-full bg-gray-200">
                <div className="bg-gray-700 h-[14px] rounded-full w-[85%] text-white font-medium p-0.5 text-xs text-center"></div>
              </div>
              <div className='flex justify-between mt-2 pl-5 pr-5'>
                <div className='flex flex-col items-center'>
                  <h3 className='text-green-600 text-sm'>22 days</h3>
                  <p className='text-gray-400'>Taken</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-red-600 text-sm'>3 days</h3>
                  <p className='text-gray-400'>Missed</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-blue-600 text-sm'>5 days</h3>
                  <p className='text-gray-400'>Remaining</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Recent Activity':
        return (
          <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[920px] h-[680px] p-4 mt-8 flex flex-col">
            <h2 className="text-[22px] font-semibold">Recent Medication Activity</h2>
            <ul className="mt-4">
              {[
                'Monday, June 10|8:30 AM|Completed|Photo',
                'Sunday, June 9|8:15 AM|Completed',
                'Saturday, June 8||Missed',
                'Friday, June 7|8:45 AM|Completed|Photo',
                'Thursday, June 6|8:20 AM|Completed',
              ].map((entry, idx) => {
                const [day, time, status, hasPhoto] = entry.split('|')
                return (
                  <li
                    key={idx}
                    className="flex justify-between items-start rounded-[22px] border-1 border-gray-300 w-[880px] h-[80px] p-4 my-1 mb-4"
                  >
                    <div>
                      <p
                        className={`font-semibold ${
                          status === 'Missed' ? 'text-red-500' : 'text-green-500'
                        }`}
                      >
                        {day}
                      </p>
                      <p className="text-gray-400">
                        {status === 'Missed' ? 'Medication missed' : `Taken at ${time}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      {hasPhoto && <span className="bg-gray-100 rounded-lg px-3 py-1">📷 Photo</span>}
                      <span
                        className={`bg-gray-100 rounded-lg px-3 py-1 ${
                          status === 'Missed' ? 'text-red-500' : 'text-green-500'
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )

      case 'Calendar View':
        return (
          <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[920px] p-6 mt-8 flex flex-col">
            <h2 className="text-[22px] font-semibold">Medication Calendar Overview</h2>
            <div className="flex flex-row justify-start mt-6">
              <div>
                <div className="p-2">
                  <CalendarComponent />
                </div>
                <ul className="list-disc list-inside mt-4 space-y-1 text-[18px]">
                  <li className="text-green-500">Medication taken</li>
                  <li className="text-red-400">Missed</li>
                  <li className="text-blue-500">Today</li>
                </ul>
              </div>
              <div className='ml-6'>
                <h1 className="text-[22px] font-semibold mb-2">Details for June 21, 2025</h1>
                <div className="bg-blue-50 border-1 border-blue-200 rounded-[22px] p-4 w-[580px] h-[150px]">
                  <p className="text-blue-800 font-medium">🕛 Today</p>
                  <p className="text-blue-700">
                    Monitor Eleanor Thompson`s medication status for today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Notifications':
        return (
          <div className="mt-8">
            <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[920px] p-6">
              <h2 className="text-[22px] font-semibold mb-6">🔔 Notification Preferences</h2>

              <div className="mb-6 flex flex-col">
                <div className='flex justify-between items-center mb-4'>
                  <div>
                    <p className="font-semibold">Email Notifications</p>
                    <p className="text-gray-500 mb-2">Receive medication alerts via email</p>
                  </div>
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
                    </label>
                  </div>
                </div>
                <div className='flex flex-col mb-4 ml-6'>
                  <p className='font-medium mb-2'>Email Address</p>               
                  <input
                    className="border rounded px-3 py-2 w-full"
                    placeholder='Enter email address'
                  />
                </div>
              </div>
              <hr className='text-gray-400 mb-4'/>
              <div>
                <div className='flex justify-between items-center mb-4'>
                  <div>
                    <p className="font-semibold">Missed Medication Alerts</p>
                    <p className="text-gray-500 mb-2">
                      Get notified when medication is not taken on time
                    </p>
                  </div>
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
                    </label>
                  </div>
                </div>
                <div className='flex flex-col mb-4 ml-6'>
                  <p className='font-medium mb-2'>Alert me if medication isn't taken within</p>
                  <select className="border-1 border-gray-400 rounded px-3 py-2 mb-2">
                    <option>1 hours</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                    <option>4 hours</option>
                    <option>5 hours</option>
                    <option>6 hours</option>
                  </select>
                </div>
                <div className='flex flex-col mb-4 ml-6'>
                  <p className='font-medium mb-2'>Daily reminder time</p>
                  <input type="time" defaultValue="20:00" className="border-1 border-gray-400 rounded px-3 py-2" />
                </div>
                <p className="text-gray-500 mt-1">
                    Time to check if today`s medication was taken
                  </p>
              </div>
            </div>

            <div className="bg-white shadow-md border-1 border-gray-300 rounded-[22px] w-[920px] p-6 mt-6">
              <h1 className="text-[22px] font-semibold mb-4">✉️ Email Preview</h1>
              <div className="bg-gray-50 border-1 border-gray-300 p-4 rounded-[22px]">
                <h1 className="text-[18px] font-medium">
                  Subject: Medication Alert - Eleanor Thompson
                </h1>
                <p className="text-gray-700 mt-2">
                  Hello, This is a reminder that Eleanor Thompson has not taken her medication today.
                  Please check with her to ensure she takes her prescribed medication.
                  Current adherence rate: 85% (5-day streak)
                </p>
              </div>
            </div>

            <button
              type="button"
              className="bg-green-600 text-white rounded px-4 py-2 mt-4 w-[230px] ml-auto block"
            >
              Save Notification Settings
            </button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-[22px] p-6 w-1/2">
        <div className="flex items-start">
          <img
            src="/img/caretaker.png"
            alt="Caretaker Avatar"
            className="w-20 h-20 mt-2 mr-6"
          />
          <div className="text-white mt-4">
            <h1 className="text-2xl font-bold">Caretaker Dashboard</h1>
            <p className="text-gray-200">Monitoring Eleanor Thompson`s medication adherence</p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          {[
            ['85%', 'Adherence Rate'],
            ['5', 'Current Streak'],
            ['3', 'Missed This Month'],
            ['4', 'Taken This Week'],
          ].map(([value, label], idx) => (
            <div key={idx} className="bg-white/30 rounded-xl p-3 w-[400px] ml-3">
              <h1 className="text-white text-2xl">{value}</h1>
              <p className="text-white text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 w-full">
        {['Overview', 'Recent Activity', 'Calendar View', 'Notifications'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`bg-white rounded-md w-[220px] h-10 border-none mr-3 ${
              activeTab === tab ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  )
}

export default CaretakerView
