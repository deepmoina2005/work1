import SettingsSidebar from '@/components/settings/SettingsSidebar'
import React from 'react'

const SubcriptionManagmentSettings = () => {
  return (
    <div className='flex'>
        <SettingsSidebar/>

        <div className="mt-28 ml-9">
                <div className="mb-8">
                  <h1 className="text-[18px] font-semibold">Account</h1>
                  <p className="text-[14px] text-[#727272]">
                    Change your operator name, add your profile picture, change your profile picture, change your email address and password, and adjust your region so that your time zone will be displayed correctly.
                  </p>
                </div>
              </div>
    </div>
  )
}

export default SubcriptionManagmentSettings