import { IoClose } from 'solid-icons/io'
import { ParentProps } from 'solid-js'

type PersonSummaryProps = {
    pickNumber: string,
    name: string,
    onRemove: () => void,
}

function PersonSummary(props: ParentProps<PersonSummaryProps>) {
    return (
        <div
            class="flex flex-row items-center justify-between mb-2"
        >
            <div class="flex flex-row items-center">
                <figure class="relative group">
                    <img
                        src="https://placehold.co/64"
                        class="rounded-full w-8"
                    />
                    <button
                        class="absolute bg-black bg-opacity-60 rounded-full top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={props.onRemove}
                    >
                        <IoClose />
                    </button>
                </figure>
                <div class="ml-2">
                    { props.name }
                </div>
            </div>
            <div class="ml-12 bg-white rounded-full w-8 h-8 text-black font-bold flex items-center justify-center">
                {props.pickNumber === '' ? '?' : props.pickNumber}
            </div>
        </div>
    )
}

export default PersonSummary
