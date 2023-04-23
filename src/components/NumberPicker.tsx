import NumberFixed from '@/components/NumberFixed'
import NumberCustom from '@/components/NumberCustom'

function NumberPicker() {
    return (
        <div
            class="flex flex-row flex-wrap gap-4"
        >
            <NumberCustom
                isSelected={false}
            />
            <NumberFixed
                value={5}
                isSelected={false}
            />
            <NumberFixed
                value={10}
                isSelected={false}
            />
            <NumberFixed
                value={20}
                isSelected={false}
            />
            <NumberFixed
                value={30}
                isSelected={false}
            />
            <NumberFixed
                value={40}
                isSelected={false}
            />
        </div>
    )
}

export default NumberPicker
