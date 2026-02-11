import type React from "react";
import { Link } from "react-router";



const NoNotesUI = ({icon} : {icon: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
        <div className="bg-primary/10 rounded-full p-7">
        {icon}
        </div>
        <h3 className="text-xl font-bold">You have no notes</h3>
        <p className="text-base-content/60">
          It looks like you haven't created any notes yet. Click the create button above to create your first note!
        </p>
        <Link to='/create' className="btn btn-primary">
          Create Your First Note
        </Link> 
    </div>
  )
}

export default NoNotesUI