import { createMemo, ParentProps } from 'solid-js'
import { useMe } from '@/context/me'

type NumberFixedProps = {
    value: number,
}

function NumberFixed(props: ParentProps<NumberFixedProps>) {
    const me = useMe()
    const isThisNumber = createMemo(() => me.pickNumber() === props.value.toString())
    const cssClass = createMemo(() => {
        let defaultClass = 'flex-1 transition duration-500 cursor-pointer rounded-md p-4 sm:p-8 text-center text-4xl backdrop-filter backdrop-blur-md'
        if (isThisNumber()) {
            defaultClass += ' bg-white bg-opacity-100 text-black'
        }
        else {
            defaultClass += ' bg-gray-100 bg-opacity-30 hover:bg-opacity-50'
        }
        return defaultClass
    })
    return (
        <div
            class={cssClass()}
            onClick={() => {
                if (isThisNumber()) {
                    me.setMyPickerNumber()
                }
                else {
                    me.setMyPickerNumber(props.value.toString())
                }
            }}
        >
            { props.value }
        </div>
    )
}

export default NumberFixed
