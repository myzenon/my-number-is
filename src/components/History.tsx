import PersonHistory from '@/components/PersonHistory'
import MeHistory from '@/components/MeHistory'

function History() {
    return (
        <div
            class="absolute left-0 right-0 top-0 flex flex-col-reverse p-8 min-h-full"
        >
            <PersonHistory />
            <PersonHistory />
            <MeHistory />
            <PersonHistory />
            <MeHistory />
            <PersonHistory />
            <MeHistory />
            <MeHistory />
        </div>
    )
}

export default History
