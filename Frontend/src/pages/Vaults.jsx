import VaultsCard from '@/components/card/VaultsCard'
import React from 'react'
import { BsShieldLock } from 'react-icons/bs'

const Vaults = () => {
  return (
     <div className="mt-4">
          <div className="flex justify-between items-center px-7 py-4">
            <div className="flex items-center gap-2">
              <BsShieldLock className="w-[28px] h-[32px]" />
              <p className="text-[24px] font-medium text-[#393939]">Vaults</p>
            </div>
    </div>
    <div className='mt-10 mr-4 ml-4'>
      <VaultsCard/>
    </div>
    </div>
  )
}

export default Vaults