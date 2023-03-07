import { getStorageValue, setStorageValue } from '@/sys/storage'
import { ref, watch, type Ref } from 'vue'

export type DefineSettingOptions<T> = { storageKey: string; defaultValue: T }

export type DefineSettingResult<T> = {
  state: Ref<T>
  setValue: (value?: T) => void
}

export function definePersistentSetting<T>({
  storageKey,
  defaultValue,
}: DefineSettingOptions<T>): DefineSettingResult<T> {
  const state = ref(defaultValue) as Ref<T>

  watch(state, (value) => {
    setStorageValue(storageKey, value)
  })

  getStorageValue(storageKey).then((value) => {
    state.value = (value ?? defaultValue) as T
  })

  return {
    state,
    setValue(value) {
      state.value = value ?? defaultValue
    },
  }
}