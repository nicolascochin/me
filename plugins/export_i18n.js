import Experience from "@/models/Experience"

export default ({ app }, inject) => {
  Experience.i18n = app.i18n
}
