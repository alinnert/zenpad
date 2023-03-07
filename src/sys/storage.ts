import { get, set } from 'idb-keyval'
import { ref } from 'vue'

export const storageActionsRunningState = ref(0)

export async function setStorageValue(
  key: IDBValidKey,
  value: unknown,
): Promise<void> {
  storageActionsRunningState.value += 1
  try {
    await set(key, value)
  } finally {
    storageActionsRunningState.value -= 1
  }
}

export async function getStorageValue(key: IDBValidKey): Promise<unknown> {
  storageActionsRunningState.value += 1
  try {
    return await get(key)
  } finally {
    storageActionsRunningState.value -= 1
  }
}
