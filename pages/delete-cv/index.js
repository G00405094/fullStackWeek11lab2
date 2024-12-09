import DeleteCvForm from '../../components/cvInfo/DeleteCvForm'
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function DeleteCvPage() {
   const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function deleteCvHandler(name)  {
        await globalCtx.updateGlobals({ cmd: 'deleteCv', newVal: { id: name } });
        router.push('/');
    }

    return <DeleteCvForm onDeleteCV={deleteCvHandler} />
    
}

export default DeleteCvPage