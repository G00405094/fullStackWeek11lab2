// our-dimain.com/new-cv
import NewCvForm from '../../components/cvInfo/NewCvForm'
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function NewCvPage() {
   const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addCvHandler(enteredCvData)  {
        await globalCtx.updateGlobals({cmd: 'addCv', newVal: enteredCvData})
        router.push('/');
    }

    return <NewCvForm onAddCV={addCvHandler} />
    
}

export default NewCvPage