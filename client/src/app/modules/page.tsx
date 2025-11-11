import React from 'react'
import BrowseModules from '@/components/BrowseModules'
import Sidebar from '@/components/Sidebar'

const page = () => {
  return (
     <div className="flex h-screen">
    <aside className="flex-none w-50 bg-background text-foreground min-h-screen max-h-screen ">
       <Sidebar />
    </aside>
    
       <div className="flex-1 overflow-y-auto p-10 space-y-4 ">
        <BrowseModules />
       </div>
    </div>
  )
}

export default page