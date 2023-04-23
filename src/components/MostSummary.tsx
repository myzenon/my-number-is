import { FaSolidRankingStar } from 'solid-icons/fa'
import { ParentProps } from 'solid-js'

type MostSummaryProps = {
    value: number,
}

function MostSummary(props: ParentProps<MostSummaryProps>) {
    return (
        <div
            class="flex flex-row items-center justify-between mb-2"
        >
            <div class="flex flex-row items-center">
                <figure>
                    <FaSolidRankingStar />
                </figure>
                <div class="ml-2 font-bold">
                    Most
                </div>
            </div>
            <div class="ml-12 bg-white rounded-full w-8 h-8 text-black font-bold flex items-center justify-center">
                { props.value }
            </div>
        </div>
    )
}

export default MostSummary
