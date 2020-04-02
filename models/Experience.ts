import momentCustom, { Moment } from 'moment';
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

  public get startHuman(): string {
    return this.formatDateMonthYear(this.momentStart)
  }

  public get endHuman(): string {
    return this.formatDateMonthYear(this.momentEnd)
  }

  public get location(): VueI18n.TranslateResult {
    return this.getExperienceKey('location')
  }

  public get position(): VueI18n.TranslateResult {
    return this.getExperienceKey('position')
  }

  public get company(): VueI18n.TranslateResult {
    return this.getExperienceKey('company')
  }

  public get description(): VueI18n.TranslateResult {
    return this.getExperienceKey('description')
  }

  public get tags(): VueI18n.TranslateResult {
    return this.getExperienceKey('tags')
  }

  public get duration(): string {
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
    return this.t(`resume.experience.experiences.${this.i18nKey}.${key}`)
  }

  private formatDateMonthYear(date: Moment): string {
    return date.format('MMMM YYYY');
  }
}
