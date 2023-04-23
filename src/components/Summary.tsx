import { BiRegularReset } from 'solid-icons/bi'
import PersonSummary from '@/components/PersonSummary'
import MeanSummary from '@/components/MeanSummary'
import MostSummary from '@/components/MostSummary'
import MeSummary from '@/components/MeSummary'

function Summary() {
    return (
        <div
            class="flex flex-col justify-between h-full"
        >
            <section>
                <MeSummary />
                <section class="px-4">
                    <PersonSummary />
                    <PersonSummary />
                    <PersonSummary />
                    <hr class="my-4 h-px border-0 bg-white bg-opacity-30 rounded-md" />
                    <MostSummary />
                    <MeanSummary />
                </section>
            </section>
            <section class="mt-4">
                <button
                    class="w-full p-2 bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-500 text-black rounded-md flex flex-row items-center justify-center"
                >
                    <BiRegularReset />&nbsp;
                    Reset
                </button>
            </section>
        </div>
    )
}

export default Summary
