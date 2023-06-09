import TitleBar from '@/components/TitleBar'
import Summary from '@/components/Summary'
import History from '@/components/History'
import NumberPicker from '@/components/NumberPicker'

function App() {
    return (
        <main
            class="h-screen flex flex-col pb-8"
        >
            <TitleBar />
            <section
                class="px-8 pb-8 flex-1 flex flex-col sm:flex-row"
            >
                <section
                    class="mb-4 sm:mr-4 sm:mb-0"
                >
                    <Summary />
                </section>
                <History />
            </section>
            <section
                class="px-8"
            >
                <NumberPicker />
            </section>
        </main>
    )
}

export default App
