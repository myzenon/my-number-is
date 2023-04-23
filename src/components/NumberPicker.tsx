import NumberFixed from '@/components/NumberFixed'
import NumberCustom from '@/components/NumberCustom'

function NumberPicker() {
    return (
        <div
            class="flex flex-row flex-wrap gap-4"
        >
            <NumberCustom
            />
            <NumberFixed
                value={5}
            />
            <NumberFixed
                value={10}
            />
            <NumberFixed
                value={20}
            />
            <NumberFixed
                value={30}
            />
            <NumberFixed
                value={40}
            />
        </div>
    )
}

export default NumberPicker
