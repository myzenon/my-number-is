import PersonHistory from '@/components/PersonHistory'
import MeHistory from '@/components/MeHistory'
import { useFirebaseApp } from 'solid-firebase'
import { getDatabase, ref, onValue } from 'firebase/database'
import { createSignal, For } from 'solid-js'
import { useMe } from '@/context/me'

type PersonHistory = {
name: string,
pickNumber: string,
}

function History() {
    let sectionRef: HTMLElement
    const app = useFirebaseApp()
    const db = getDatabase(app)
    const historyRef = ref(db, 'history')
    const me = useMe()

    const [ histories, setHistories ] = createSignal<PersonHistory[]>([])

    onValue(historyRef, (snapshot) => {
        setHistories(Object.values(snapshot.val()?? {}).reverse() as PersonHistory[])
        sectionRef.scroll({ top: sectionRef.scrollHeight, behavior: 'smooth' })
    })

    return (
        <section
            ref={element => sectionRef = element}
            class="flex-1 overflow-y-auto relative rounded-md bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl"
        >
            <div
                class="absolute left-0 right-0 top-0 flex flex-col-reverse p-8 min-h-full"
            >
                <For each={histories()}>
                    {history => {
                        if (history.name === me.name()) {
                            return <MeHistory pickNumber={history.pickNumber} name={history.name} />
                        }
                        else {

                            return <PersonHistory pickNumber={history.pickNumber} name={history.name} />
                        }
                    }}
                </For>
            </div>
        </section>
    )
}

export default History
