import {ref} from "vue"

const toggle = ref(true)
export function useSwitch() {
    return toggle
}