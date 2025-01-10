import { Progress } from '@/components/ui/progress'
import MemoriesTable from '@/webcomponents/table/MemoriesTable'
import To_dosTable from '@/webcomponents/table/To-dosTable'
import { CircleCheck, Tags } from 'lucide-react'
import React, { useState } from 'react'
import { CiCalendarDate } from 'react-icons/ci'
import { GoBell, GoGoal } from 'react-icons/go'
import { MdArrowForwardIos } from 'react-icons/md'

const GoalsShowPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("To-dos");

  return (
    <div className='mt-1 mr-3 h-[955px] bg-white rounded-sm'>
      <div className="flex items-center gap-2">
        <div className='flex items-center gap-2 mt-6 ml-6'>
          <GoGoal className="w-[19px] h-[19px]" />
          <p className="text-[14px] font-medium">Goals</p>
          <span className='text-[12px]'>
            <MdArrowForwardIos />
          </span>
          <span className='text-[12px]'>Learn New Language</span>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-9 ml-6'>
        <CiCalendarDate className='w-[24px] h-[24px]' />
        <span className='text-[16px]'>14/12/2024</span>
      </div>

      <div className='flex items-center gap-2  mt-9 ml-6'>
        <h1 className=' text-[20px]'>Learn New Language</h1>
        <span className='border flex pl-3 pr-3 rounded-md border-black'>
          <p className='text-[10px] text-black'>high</p>
        </span>
        <span>
          <GoBell />
        </span>
      </div>

      <div className="flex items-center gap-2 mt-2 ml-6">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-[#CFDCFF] px-2 py-1 rounded-md">
          <CircleCheck className="w-4 h-4 text-[#1976D2]" /> <p className='text-[#1976D2]'>0/5</p>
        </span>
        <span className='bg-[#1976D2] w-20 h-7 text-center rounded-sm'>
          <p className='text-[12px] p-1 text-white'>Yearly</p>
        </span>
      </div>

      <div className='mt-9 ml-6'>
        <p className='text-[12px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, urna vel tincidunt volutpat, felis eros sodales magna, non facilisis turpis purus ut ipsum. Nullam ac eros orci. Quisque nec risus purus. Nam ut orci vitae nunc hendrerit tincidunt. Mauris at convallis augue. Integer ut risus vitae lectus porttitor tincidunt non eu libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>

      <div className='mt-9 ml-6'>
        <h1 className='text-[#393939] text-[14px] font-semibold'>Progress Status</h1>
        <p className='text-[24px] text[#393939] font-bold'>10%</p>
        <Progress className='w-[432px] h-[7px]' value={10} />
      </div>

      <div className="flex rounded-md border border-[#D7D7D7] w-[219px] h-[44px] mt-9 ml-6">
        {["To-dos", "Memories"].map((range) => (
          <button
            key={range}
            onClick={() => setSelectedTimeRange(range)}
            className={`rounded-md font-medium w-[106px] m-1 ${
              selectedTimeRange === range ? "bg-[#F3F3F3] text-gray-900" : "text-gray-900"
            } focus:outline-none`}
          >
            {range}
          </button>
        ))}
      </div>

      <div className='mt-2 ml-6'>
        {selectedTimeRange === "To-dos" && <To_dosTable />}
        {selectedTimeRange === "Memories" && <MemoriesTable />}
      </div>
    </div>
  )
}

export default GoalsShowPage;
