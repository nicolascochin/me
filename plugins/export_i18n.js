import Base from "@/models/Base"

export default ({ app }) => {
  Base.i18n = app.i18n
}
