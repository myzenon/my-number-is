import { BiRegularReset } from 'solid-icons/bi'
import PersonSummary from '@/components/PersonSummary'
import MeanSummary from '@/components/MeanSummary'
import MostSummary from '@/components/MostSummary'
import MeSummary from '@/components/MeSummary'
import { useFirebaseApp } from 'solid-firebase'
import { child, get, getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { useMe } from '@/context/me'
import { createMemo, createSignal, For } from 'solid-js'

type SummaryPerson = {
    name: string,
    pickNumber: string,
}

function Summary() {
    const app = useFirebaseApp()
    const db = getDatabase(app)
    const boardRef = ref(db, 'board')
    const historyRef = ref(db, 'history')
    const me = useMe()
    const [ people, setPeople ] = createSignal<SummaryPerson[]>([])

    onValue(boardRef, (snapshot) => {
        const board = snapshot.val() ?? {}
        const people = Object.keys(board).map(personName => {
            return {
                name: personName,
                pickNumber: board[personName],
            } as SummaryPerson
        })
        setPeople(people)
    })

    const reset = async () => {
        const board = (await get(child(boardRef, '/'))).val()
        Object.keys(board).forEach(personName => {
            board[personName] = ''
        })
        set(boardRef, board)
        remove(historyRef)
    }

    const mostValue = createMemo(() => {
        const filteredNumber = people().map(person => parseInt(person.pickNumber)).filter(pNumber => !isNaN(pNumber))

        if (filteredNumber.length < 3) {
            return 0
        }

        // Create a frequency map
        const frequencyMap = {} as { [key: number]: number }
        for (const number of filteredNumber) {
            if (frequencyMap[number]) {
                frequencyMap[number]++
            }
            else {
                frequencyMap[number] = 1
            }
        }

        // Find the key with the highest value
        const maxKey = (Object.keys(frequencyMap) as unknown as number[])
            .reduce((prevKey, currKey) => frequencyMap[prevKey] > frequencyMap[currKey] ? prevKey : currKey)

        // Check if the frequency of the max key is greater than 1
        if (frequencyMap[maxKey] > 1) {
            return maxKey
        }
        else {
            return 0
        }
    })

    const meanValue = createMemo(() => {
        const filteredNumber = people().map(person => parseInt(person.pickNumber)).filter(pNumber => !isNaN(pNumber))
        if (filteredNumber.length === 0) {
            return 0
        }
        return Number((filteredNumber.reduce((sum, num) => sum+=num, 0) / filteredNumber.length).toFixed(0))
    })

    const removePerson = (person: SummaryPerson) => {
        remove(ref(db, `board/${person.name}`))
    }

    return (
        <div
            class="flex flex-col justify-between h-full"
        >
            <section>
                <MeSummary />
                <section class="px-4">
                    <For each={people()}>
                        {(person) => {
                            if (person.name === me.name()) {
                                return null
                            }
                            return <PersonSummary
                                name={person.name}
                                pickNumber={person.pickNumber}
                                onRemove={() => removePerson(person)}
                            />
                        }}
                    </For>
                    <hr class="my-4 h-px border-0 bg-white bg-opacity-30 rounded-md" />
                    <MostSummary value={mostValue()} />
                    <MeanSummary value={meanValue()} />
                </section>
            </section>
            <section class="mt-4">
                <button
                    class="w-full p-2 bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-500 text-black rounded-md flex flex-row items-center justify-center"
                    type="button"
                    onClick={reset}
                >
                    <BiRegularReset />&nbsp;
                    Reset
                </button>
            </section>
        </div>
    )
}

export default Summary
