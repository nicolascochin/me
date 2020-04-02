import moment from 'moment'
import momentPrecise from "moment-precise-range-plugin";

export default ({ app }) => {
  moment.locale(app.i18n.locale)
}
