import { TbSum } from 'solid-icons/tb'

function MeanSummary() {
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
                32
            </div>
        </div>
    )
}

export default MeanSummary
