import { ParentProps } from 'solid-js'

type MeHistoryProps = {
    name: string,
    pickNumber: string,
}
function MeHistory(props: ParentProps<MeHistoryProps>) {
    return (
        <div class="flex items-center flex-row-reverse mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 ml-4">
                <img class="rounded-full w-10 h-10"
                    src="https://placehold.co/64" />
                <a href="#" class="block text-xs hover:underline">{props.name}</a>
            </div>
            <div class="bg-white bg-opacity-80 text-gray-800 p-2 rounded-lg mb-2 relative">
                <div>{props.pickNumber}</div>

                <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
            </div>
        </div>
    )
}

export default MeHistory
