import { FC } from "react"
import { ActionPanelProps } from "@/page/App/components/Actions/ActionPanel/interface"
import { mysqlContainerStyle } from "@/page/App/components/Actions/ActionPanel/MysqlPanel/style"
import { ResourceChoose } from "@/page/App/components/Actions/ActionPanel/ResourceChoose"
import { MysqlAction } from "@/redux/currentApp/action/actionState"

export const MysqlPanel: FC<ActionPanelProps<MysqlAction>> = () => {
  return (
    <div css={mysqlContainerStyle}>
      <ResourceChoose />
    </div>
  )
}

MysqlPanel.displayName = "MysqlPanel"