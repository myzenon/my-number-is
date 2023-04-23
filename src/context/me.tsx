import { faker } from '@faker-js/faker'
import { child, DataSnapshot, get, getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { useFirebaseApp } from 'solid-firebase'
import { Accessor, Context, createContext, createEffect, createSignal, onMount, ParentProps, Setter, useContext } from 'solid-js'

type MeContext = {
    name: Accessor<string>,
    setName: Setter<string>,
    image: string,
    pickNumber: Accessor<string |undefined>,
    setMyPickerNumber: (targetNumber?: string|undefined) => void,
}

const context = createContext<MeContext>()

let storageMeNameKey = 'meName'
export function MeProvider(props: ParentProps) {
    const app = useFirebaseApp()
    const db = getDatabase(app)
    const boardRef = ref(db, 'board')

    const [ name, setName ] = createSignal(localStorage.getItem(storageMeNameKey) ?? faker.name.firstName())
    createEffect(() => {
        localStorage.setItem(storageMeNameKey, name())
        fetchStorePickerNumber()
    })

    const [ pickNumber, setPickerNumber ] = createSignal<string>()
    const setMyPickerNumber = (targetNumber?: string | undefined) => {
        setPickerNumber(targetNumber)
        const myBoardNumberRef = ref(db, `board/${name()}`)
        const historyRef= ref(db, `history/${Date.now()}`)
        if (targetNumber) {
            set(myBoardNumberRef, targetNumber)
            set(historyRef, {
                name: name(),
                pickNumber: targetNumber,
            })
        }
        else {
            set(myBoardNumberRef, '')
            set(historyRef, {
                name: name(),
                pickNumber: '?',
            })
        }

    }

    const setFromStorePickerNumber = (snapshot: DataSnapshot) => {
        const board = snapshot.val() ?? {}
        const myPickNumber = board[name()]
        if (myPickNumber) {
            setPickerNumber(myPickNumber)
        }
        else {
            setPickerNumber()
        }
    }
    const fetchStorePickerNumber = async () => {
        setFromStorePickerNumber(await get(child(boardRef, '/')))
    }
    onMount(async () => {
        await fetchStorePickerNumber()
    })
    onValue(boardRef, setFromStorePickerNumber)

    const me = {
        name,
        setName,
        image: 'some',
        pickNumber,
        setMyPickerNumber,
    }
    return (
        <context.Provider value={me}>
            {props.children}
        </context.Provider>
    )
}


export const useMe = () => useContext<MeContext>(context as Context<MeContext>)
