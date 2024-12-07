import CvList from '../components/cvInfo/CvList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <CvList cvInfo={globalCtx.theGlobalObject.cvs} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;