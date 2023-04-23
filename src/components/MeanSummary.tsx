import { TbSum } from 'solid-icons/tb'
import { ParentProps } from 'solid-js'

type MeanSummaryProps = {
    value: number,
}

function MeanSummary(props: ParentProps<MeanSummaryProps>) {
    return (
        <div
            class="flex flex-row items-center justify-between mb-2"
        >
            <div class="flex flex-row items-center">
                <figure>
                    <TbSum />
                </figure>
                <div class="ml-2 font-bold">
                    Mean
                </div>
            </div>
            <div class="ml-12 bg-white rounded-full w-8 h-8 text-black font-bold flex items-center justify-center">
                {props.value}
            </div>
        </div>
    )
}

export default MeanSummary
