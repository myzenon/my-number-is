import { createMemo, createSignal, onMount, ParentProps } from 'solid-js'
import Modal from '@/components/Modal'
import { useMe } from '@/context/me'

function NumberCustom() {
    const [ isInputShow, setIsInputShow ] = createSignal(false)
    const [ inputValue, setInputValue ] = createSignal('')
    const me = useMe()
    const isThisNumber = createMemo(() => ![ undefined, '5', '10', '20', '30', '40' ].includes(me.pickNumber()?.toString()))
    const cssClass = createMemo(() => {
        let defaultClass = 'flex-1 transition duration-500 cursor-pointer rounded-md p-4 sm:p-8 text-center text-4xl backdrop-filter backdrop-blur-md underline underline-offset-8'
        if (isThisNumber()) {
            defaultClass += ' bg-white bg-opacity-100 text-black'
        }
        else {
            defaultClass += ' bg-gray-100 bg-opacity-30 hover:bg-opacity-50'
        }
        return defaultClass
    })
    const onSubmit = () => {
        if (!isNaN(Number(inputValue()))) {
            me.setMyPickerNumber(inputValue())
        }
    }
    return (
        <>
            <div
                class={cssClass()}
                onClick={() => {
                    if (isThisNumber()) {
                        me.setMyPickerNumber()
                    }
                    else {
                        setInputValue('')
                        setIsInputShow(true)
                    }
                }}
            >
                {!isThisNumber() ? '?': me.pickNumber()}
            </div>

            <Modal
                isShow={isInputShow()}
                onClose={() => setIsInputShow(false)}
            >
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        onSubmit()
                        setIsInputShow(false)
                    }}
                >
                    <div class="mb-4">
                        <input
                            ref={(element) => {
                                setTimeout(() => {
                                    element.focus()
                                }, 0)
                            }}
                            type="text"
                            class="text-center w-32 text-4xl bg-gray-200 p-4 rounded-lg"
                            value={inputValue()}
                            onInput={event => {
                                setInputValue(event.target.value)
                            }}
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
