import { ParentProps, Show } from 'solid-js'
import { IoClose } from 'solid-icons/io'

type ModalProps = {
    isShow: boolean,
    onClose: () => void,
}

function Modal(props: ParentProps<ModalProps>) {
    return (
        <Show when={props.isShow}>
            <div
                class="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                data-tauri-drag-region
            >
                <div
                    class="relative p-8 pt-12 bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm rounded text-black"
                >
                    <header
                        class="absolute top-0 right-0 p-2"
                    >
                        <button
                            class="p-1 rounded-full bg-gray-600 bg-opacity-0 hover:bg-opacity-100 hover:text-white transition duration-500"
                            onClick={props.onClose}
                        >
                            <IoClose size={24} />
                        </button>
                    </header>
                    {props.children}
                </div>
            </div>
        </Show>
    )
}

export default Modal
