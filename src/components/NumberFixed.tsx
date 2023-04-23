import { ParentProps } from 'solid-js'

type NumberFixedProps = {
    value: number,
    isSelected: boolean,
}

function NumberFixed(props: ParentProps<NumberFixedProps>) {
    return (
        <div
            class="flex-1 bg-gray-100 bg-opacity-30 hover:bg-opacity-50 transition duration-500 cursor-pointer rounded-md p-4 sm:p-8 text-center text-4xl backdrop-filter backdrop-blur-md"
        >
            { props.value }
        </div>
    )
}

export default NumberFixed
