import Cards from "@/components/Cards";
import {database} from "@/databese/firebase";
import {ref, remove} from "firebase/database";

interface DataItem {
    name: string;
    url: string;
    frontImg: string;
    backImg: string;
    description: string;
    id?: string;
}
const WordEdit =({data,setLoading,setDataList}:{data:DataItem[],setLoading:any,setDataList:any})=>{

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return

        try {
            setLoading(true)
            const itemRef = ref(database, `data/${id}`)
            await remove(itemRef)

            // تحديث القائمة المحلية
            setDataList(data.filter(item => item.id !== id))
        } catch (error) {
            console.error("Error deleting item:", error)
            alert("An error occurred while deleting item.")
        } finally {
            setLoading(false)
        }
    }

    return (
            <div className={'flex flex-col items-center px-12 sm:px-20 lg:px-32 pt-10 gap-2 md:gap-4 '}>
                <div className={'w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center'}>
                    {data.map((item, index) => (
                        <div key={index} onClick={()=>handleDelete(item.id!)} className={'flex flex-col relative  group cursor-pointer'}>
                            <Cards
                                imageOne={item.frontImg}
                                imageTow={item.backImg}
                                name={item.name}
                                title={item.description}
                                link={item.url}
                            />
                        </div>

                    ))}

                </div>
            </div>
    )
}

export default WordEdit