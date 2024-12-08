// our-dimain.com/new-cv
import NewCvForm from '../../components/cvInfo/NewCvForm'
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function NewCvPage() {
    console.log('NewCvPage rendered'); // Add log to confirm rendering
    return <div>Test NewCvPage Render</div>; // Temporarily replace the actual content
   /* const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addCvHandler(enteredCvData)  {
        await globalCtx.updateGlobals({cmd: 'addCv', newVal: enteredCvData})
        router.push('/');
    }

    return <NewCvForm onAddCV={addCvHandler} />
    */
}

export default NewCvPage