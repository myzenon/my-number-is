import { createSignal } from 'solid-js'
import { RiMediaImageEditFill } from 'solid-icons/ri'
import Modal from '@/components/Modal'
import { useMe } from '@/context/me'

function MeSummary() {
    const [ isEditModalShow, setIsEditModalShow ] = createSignal(false)
    const me = useMe()
    const [ name, setName ] = createSignal(me.name())

    const onSubmit = () => {
        me.setName(name)
    }

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
                    {me.name()}
                </div>
            </div>
            <div class="ml-12 bg-white rounded-full w-8 h-8 text-black font-bold flex items-center justify-center">
                {me.pickNumber() ?? '?'}
            </div>
            <Modal
                isShow={isEditModalShow()}
                onClose={() => setIsEditModalShow(false)}
            >
                <form
                    class="w-64"
                    onSubmit={(event) => {
                        event.preventDefault()
                        onSubmit()
                        setIsEditModalShow(false)
                    }}
                >
                    <div class="flex flex-row justify-center mb-8">
                        <figure class="relative group">
                            <img
                                src="https://placehold.co/64"
                                class="rounded-full w-48 h-48"
                            />
                            <button
                                class="absolute bg-black bg-opacity-60 rounded-full top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                                onClick={() => setIsEditModalShow(true)}
                            >
                                <RiMediaImageEditFill size={64} />
                            </button>
                        </figure>
                    </div>
                    <div class="mb-8">
                        <input
                            ref={(element) => {
                                setTimeout(() => {
                                    element.focus()
                                }, 0)
                            }}
                            type="text"
                            class="text-center w-full text-xl bg-gray-200 p-4 rounded-lg"
                            value={name()}
                            onInput={event => {
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="w-full bg-gray-800 hover:bg-black transition text-white font-bold py-2 px-4 rounded"
                        >
                            OK
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default MeSummary
