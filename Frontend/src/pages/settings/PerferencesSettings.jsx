import SettingsSidebar from "@/components/settings/SettingsSidebar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PreferencesSettings = () => {
  return (
    <div className="flex">
      <SettingsSidebar />

      <div className="mt-20 ml-12 w-full">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-lg font-semibold">Preferences</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Customize your experience effortlessly with the Preference settings.
            Adjust Calendar, Memories, and Tasks to match your unique needs and preferences seamlessly.
          </p>
        </div>

        {/* Tabs Section */}
          <Tabs defaultValue="calendar" className="w-[860px]">
            {/* Tabs Navigation */}
            <TabsList className="grid grid-cols-3 w-[300px] bg-white border border-gray-300 rounded-md">
              <TabsTrigger
                value="calendar"
                className="text-sm font-medium data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:border-gray-300"
              >
                Calendar
              </TabsTrigger>
              <TabsTrigger
                value="memories"
                className="text-sm font-medium data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:border-gray-300"
              >
                Memories
              </TabsTrigger>
              <TabsTrigger
                value="tasks"
                className="text-sm font-medium data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:border-gray-300"
              >
                Tasks
              </TabsTrigger>
            </TabsList>

            {/* Tabs Content Calender */}
            <from>
            <TabsContent value="calendar">
              <div  className="mt-6 space-y-52 space-x-[580px]">
              {/* Notification Preferences Section */}
              <div className="flex justify-between items-center">
                <Label htmlFor="notification-method" className="text-sm font-medium text-gray-700">
                  <h2 className="text-lg">Remind me to take notes</h2>
                </Label>
                <Select>
                  <SelectTrigger className="w-[419px] bg-white rounded-md border border-gray-300">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="30min-after">30 min after start</SelectItem>
                      <SelectItem value="5min-before">5 min before start</SelectItem>
                      <SelectItem value="start-time">At start time</SelectItem>
                      <SelectItem value="end-time">At end time</SelectItem>
                      <SelectItem value="5min-after">5 min after end</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Checkbox Preferences */}
              <div className="flex gap-6 mt-auto">
                <div className="flex items-center space-x-3">
                  <Checkbox id="desktop" className="border-gray-400 rounded-sm" />
                  <Label htmlFor="desktop" className="text-sm text-gray-700 font-medium cursor-pointer">
                    Desktop
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="mobile" className="border-gray-400 rounded-sm" />
                  <label htmlFor="mobile" className="text-sm text-gray-700 font-medium cursor-pointer">
                    Mobile
                  </label>
                </div>
              </div>
              </div>
              <div  className="mt-6 space-y-52 space-x-[580px]">
              {/* Notification Preferences Section */}
              <div className="flex justify-between items-center">
                <Label htmlFor="notification-method" className="text-sm font-medium text-gray-700">
                  <h2 className="text-lg">Remind me to take notes</h2>
                </Label>
                <Select>
                  <SelectTrigger className="w-[419px] bg-white rounded-md border border-gray-300">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="30min-after">30 min after start</SelectItem>
                      <SelectItem value="5min-before">5 min before start</SelectItem>
                      <SelectItem value="start-time">At start time</SelectItem>
                      <SelectItem value="end-time">At end time</SelectItem>
                      <SelectItem value="5min-after">5 min after end</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Checkbox Preferences */}
              <div className="flex gap-6 mt-auto">
                <div className="flex items-center space-x-3">
                  <Checkbox id="desktop" className="border-gray-400 rounded-sm" />
                  <Label htmlFor="desktop" className="text-sm text-gray-700 font-medium cursor-pointer">
                    Desktop
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="mobile" className="border-gray-400 rounded-sm" />
                  <label htmlFor="mobile" className="text-sm text-gray-700 font-medium cursor-pointer">
                    Mobile
                  </label>
                </div>
              </div>
              </div>
              <div  className="mt-6 space-y-52 space-x-[580px]">
              <div className="mt-6 space-y-52 space-x-[580px]">
              {/* Notification Preferences Section */}
              <div className="flex justify-between items-center">
                <Label htmlFor="notification-method" className="text-sm font-medium text-gray-700">
                  <h2 className="text-gray-800 text-lg">Remind me to open notes</h2>
                  <p className="text-gray-600 text-sm">This list your connected calender accounts</p>
                </Label>
                <Button className="bg-black w-40 h-10">Connect Calender</Button>
              </div>
            </div>
              
              </div>
            </TabsContent>
            </from>
           
            {/* Tabs Content Tasks */}
            <from>
            <TabsContent value="tasks" className="mt-6 ">
              <h2 className="text-[14px] font-bold">Import Folders</h2>
              <p className="text-[12px]">Tasks you create of a note will be saved in the selected location by default.</p>
            </TabsContent>
            <TabsContent value="tasks" className="mt-6 space-y-52 space-x-[580px]">
              {/* Notification Preferences Section */}
              <div className="flex justify-between items-center">
                <Label htmlFor="notification-method" className="text-sm font-medium text-gray-700">
                  <h2 className="text-lg">Select a memory</h2>
                </Label>
                <Select>
                  <SelectTrigger className="w-[419px] bg-white rounded-md border border-gray-300">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="30min-after">30 min after start</SelectItem>
                      <SelectItem value="5min-before">5 min before start</SelectItem>
                      <SelectItem value="start-time">At start time</SelectItem>
                      <SelectItem value="end-time">At end time</SelectItem>
                      <SelectItem value="5min-after">5 min after end</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-6 ">
              <h2 className="text-[14px] font-bold">Default task reminders</h2>
              <p className="text-[12px]">Automatically set reminders when you add a due date and time to a task.</p>
            </div>
            </TabsContent>
            </from>
          </Tabs>
      </div>
    </div>
  );
};

export default PreferencesSettings;
