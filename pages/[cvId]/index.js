import CvDetail from '../../components/cvInfo/CvDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

export default function CvPage() {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null;

    if (globalCtx?.theGlobalObject?.cvs?.length > 0 && router.query?.name) {
        for (let ii = 0; ii < globalCtx.theGlobalObject.cvs.length; ii++) {
            let temp = globalCtx.theGlobalObject.cvs[ii];
            
            // Check if `temp` and `temp.name` exist before calling `.trim()`
            if (temp?.name?.trim() === router.query?.name?.trim()) {
                returnVal = (
                    <CvDetail 
                        name={temp.name}
                        email={temp.email}
                        phone={temp.phone}
                        education={temp.education}
                        experience={temp.experience}
                        skills={temp.skills} 
                    />
                );
                break; // Exit the loop once a match is found
            }
        }
    }

    // If no matching CV is found or data is still loading
    if (!returnVal) {
        return <p>Loading or no matching CV found...</p>;
    }

    return returnVal;
}
