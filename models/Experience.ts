import momentCustom from 'moment';
import Base from "./Base"
import VueI18n from 'vue-i18n'

export default class Experience extends Base {
  public momentStart!: momentCustom.Moment;
  public momentEnd!: momentCustom.Moment;

  constructor(public i18nKey: string) {
    super()
    this.momentStart = momentCustom.utc(this.getExperienceKey('start'));
    this.momentEnd = momentCustom.utc(this.getExperienceKey('end'));
  }

  get title(): VueI18n.TranslateResult {
    return this.getExperienceKey('title')
  }

  get duration(): string {
    const years: number = this.durationObject.years;
    const months: number = this.durationObject.months;
    const yearsString: string = years ? `${years} ${this.tc('year', years)}` : '';
    const monthsString: string = months ? `${months} ${this.tc('month', months)}` : '';
    return `${yearsString} ${years && months ? ` ${this.t('and')} ` : ''} ${monthsString}`;
  }

  private get durationObject(): momentCustom.PreciseRangeValueObject {
    return momentCustom.preciseDiff(this.momentStart, this.momentEnd, true);
  }

  private getExperienceKey(key: string): VueI18n.TranslateResult {
    return this.t(`experiences.${this.i18nKey}.${key}`)
  }
}
