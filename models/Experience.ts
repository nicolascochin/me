// import { Moment } from 'moment';
// import { PreciseRangeValueObject } from "moment-precise-range-plugin";
import Base from "./Base"
import VueI18n from 'vue-i18n'

export default class Experience extends Base {
  public momentStart!: Date;
  public momentEnd!: Date;

  constructor(public i18nKey: string) {
    super()
    this.momentStart = this.parseDate("start")
    this.momentEnd = this.parseDate("end")
  }

  public get startHuman(): VueI18n.TranslateResult {
    return this.formatDateMonthYear(this.momentStart)
  }

  public get endHuman(): VueI18n.TranslateResult {
    return this.formatDateMonthYear(this.momentEnd)
  }

  public get location(): VueI18n.TranslateResult {
    return this.getExperienceKey('location')
  }

  public get position(): VueI18n.TranslateResult {
    return this.getExperienceKey('position')
  }

  public get subtitle(): VueI18n.TranslateResult|null {
    const key: string = 'subtitle'
    return this.te(this.getFullKey(key)) ? this.getExperienceKey('subtitle') : null
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

  private get durationObject(): any {
    const diff: Date = new Date(this.momentEnd.getTime() - this.momentStart.getTime())
    return {
      years: diff.getFullYear() - 1970,
      months: diff.getMonth() + 1,
    };
  }

  private parseDate(key: string): Date {
    const translation = this.getExperienceKey(key)
    if (translation) {
      return new Date(Date.parse(this.getExperienceKey(key) as string))
    } else {
      return new Date()
    }
  }

  private getFullKey(key: string) : string {
    return `resume.experience.experiences.${this.i18nKey}.${key}`
  }

  private getExperienceKey(key: string): VueI18n.TranslateResult {
    return this.t(this.getFullKey(key))
  }

  private formatDateMonthYear(date: Date): VueI18n.TranslateResult {
    return this.d(date, 'monthAndYear')
  }
}
