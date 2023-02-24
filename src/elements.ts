import { AppFrame } from './elements/app/appFrame'
import { AppSidebar } from './elements/app/appSidebar'
import { DisplayTime } from './elements/displayTime/displayTime'
import { NumberInput } from './elements/settings/numberInput'
import { TabLabel } from './elements/tabs/tabLabel'
import { TabsContainer } from './elements/tabs/tabsContainer'
import { TabsTab } from './elements/tabs/tabsTab'
import { TextEditor } from './elements/textEditor/textEditor'

customElements.define('app-frame', AppFrame)
customElements.define('display-time', DisplayTime)
customElements.define('text-editor', TextEditor)
customElements.define('app-sidebar', AppSidebar)
customElements.define('tabs-container', TabsContainer)
customElements.define('tabs-tab', TabsTab)
customElements.define('tab-label', TabLabel)
customElements.define('number-input', NumberInput)
