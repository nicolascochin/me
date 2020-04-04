import Base from "@/models/Base"

export default ({ app }) => {
  Base.moment = app.$moment
  app.$moment.locale(app.i18n.locale)
}
