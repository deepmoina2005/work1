import SettingsSidebar from '@/components/settings/SettingsSidebar'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const NotificationsSettings = () => {
  return (
    <div className="flex">
      <SettingsSidebar />

      <div className="mt-28 ml-9 w-full">
        <div className="mb-8">
          <h1 className="text-[18px] font-semibold">Notifications</h1>
          <p className="text-[14px] text-[#727272]">
            Manage your preferences with ease on the notification settings page. Customize alerts, stay updated, and control what notifications you want to receive.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Goal reminders */}
          <div className="flex justify-between items-center">
            <Label htmlFor="goal-reminders">Goal reminders (daily, weekly, monthly)</Label>
            <Switch className="mr-8" id="goal-reminders" />
          </div>

          {/* Progress tracking */}
          <div className="flex justify-between items-center">
            <Label htmlFor="progress-tracking">Progress tracking updates</Label>
            <Switch className="mr-8" id="progress-tracking" />
          </div>

          {/* Notes and task alerts */}
          <div className="flex justify-between items-center">
            <Label htmlFor="notes-alerts">Notes and unlinked task alerts</Label>
            <Switch className="mr-8" id="notes-alerts" />
          </div>

          {/* Notification method */}
          <div className="flex justify-between items-center">
            <Label htmlFor="notification-method">Notification preferences</Label>
            <div className='mr-8'>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a method" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select an option</SelectLabel>
                  <SelectItem value="SMS">SMS</SelectItem>
                  <SelectItem value="Email">Email</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsSettings
