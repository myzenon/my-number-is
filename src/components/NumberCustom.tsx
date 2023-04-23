import { createSignal, onMount, ParentProps } from 'solid-js'
import Modal from '@/components/Modal'

type NumberCustomProps = {
    isSelected: boolean,
}

function NumberCustom(props: ParentProps<NumberCustomProps>) {
    let inputRef
    const [ isInputShow, setIsInputShow ] = createSignal(true)

    onMount(() => {
        console.log(inputRef)
        inputRef.focus()
        console.log(inputRef)
    })

    return (
        <>
            <div
                class="flex-1 bg-gray-100 bg-opacity-30 hover:bg-opacity-50 transition duration-500 cursor-pointer rounded-md p-4 sm:p-8 text-center text-4xl backdrop-filter backdrop-blur-md underline underline-offset-8"
                onClick={() => setIsInputShow(true)}
            >
            ?
            </div>

            <Modal
                isShow={isInputShow()}
                onClose={() => setIsInputShow(false)}
            >
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                    }}
                >
                    <div class="mb-4">
                        <input
                            ref={inputRef}
                            type="text"
                            class="text-center w-32 text-4xl bg-gray-200 p-4 rounded-lg"
                            value="20"
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-gray-800 hover:bg-black transition text-white font-bold py-2 px-4 rounded"
                    >
                    OK
                    </button>
                </form>
            </Modal>
        </>
    )
}

export default NumberCustom
