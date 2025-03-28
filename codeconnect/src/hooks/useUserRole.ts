import { useUser } from "@clerk/nextjs"
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"



const useUserRole=()=>{
    const {user}=useUser()

    const userData=useQuery(api.users.getUserByClerkId, {clerkId: user?.id|| ""})

    const isLoading= userData===undefined

    return {
        isLoading,
        isCandidate: userData?.role==="candidate",
        isInterviewer: userData?.role==="interviewer",
    }
    
}

export default useUserRole
