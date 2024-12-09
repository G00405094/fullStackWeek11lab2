import MeetupDetail from '../../components/cvInfo/CvDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.cvs.length; ii++) {
        let temp = globalCtx.theGlobalObject.cvs[ii]
        if (temp.infoId.trim() == router.query.cvId.trim()) {
            returnVal = (
                <CvDetail 
                
                    name={temp.name}
                    email={temp.email}
                    phone={temp.phone}
                    education={temp.education}
                    experience={temp.experience}
                    skills={temp.skills} 
                />
            )        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
