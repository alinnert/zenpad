import { AppFrame } from './elements/appFrame/appFrame'
import { AppSidebar } from './elements/appSidebar/appSidebar'
import { DisplayTime } from './elements/displayTime/displayTime'
import { TabsContainer } from './elements/tabsContainer/tabsContainer'
import { TabsTab } from './elements/tabsTab/tabsTab'
import { TextEditor } from './elements/textEditor/textEditor'

customElements.define('app-frame', AppFrame)
customElements.define('display-time', DisplayTime)
customElements.define('text-editor', TextEditor)
customElements.define('app-sidebar', AppSidebar)
customElements.define('tabs-container', TabsContainer)
customElements.define('tabs-tab', TabsTab)
