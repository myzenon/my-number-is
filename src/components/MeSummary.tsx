import { createSignal } from 'solid-js'
import { RiMediaImageEditFill } from 'solid-icons/ri'
import Modal from '@/components/Modal'

function MeSummary() {
    const [ isEditModalShow, setIsEditModalShow ] = createSignal(false)
    return (
        <div
            class="bg-white bg-opacity-20 p-4 rounded-xl flex flex-row items-center justify-between mb-6"
        >
            <div class="flex flex-row items-center">
                <figure class="relative group">
                    <img
                        src="https://placehold.co/64"
                        class="rounded-full w-8"
                    />
                    <button
                        class="absolute bg-black bg-opacity-60 rounded-full top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => setIsEditModalShow(true)}
                    >
                        <RiMediaImageEditFill />
                    </button>
                </figure>
                <div
                    class="ml-2 cursor-pointer"
                    onClick={() => setIsEditModalShow(true)}
                >
                    I am iron man
                </div>
            </div>
            <div class="ml-12 bg-white rounded-full w-8 h-8 text-black font-bold flex items-center justify-center">
                4
            </div>
            <Modal
                isShow={isEditModalShow()}
                onClose={() => setIsEditModalShow(false)}
            />
        </div>
    )
}

export default MeSummary
