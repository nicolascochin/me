import momentCustom from 'moment';

import VueI18n from 'vue-i18n'

export default class Experience {
  public static i18n: VueI18n;

  public momentStart!: momentCustom.Moment;
  public momentEnd!: momentCustom.Moment;

  constructor(public i18nKey: string) {
    this.momentStart = momentCustom.utc(this.getTranslationKey('start'));
    this.momentEnd = momentCustom.utc(this.getTranslationKey('end'));
  }

  get title(): VueI18n.TranslateResult {
    return this.getTranslationKey('title')
  }

  get duration(): string {
    const years: number = this.durationObject.years;
    const months: number = this.durationObject.months;
    const yearsString: string = years ? `${years} ${Experience.i18n.tc('year', years)}` : '';
    const monthsString: string = months ? `${months} ${Experience.i18n.tc('month', months)}` : '';
    return `${yearsString} ${years && months ? ` ${Experience.i18n.t('and')} ` : ''} ${monthsString}`;
  }

  private get durationObject(): momentCustom.PreciseRangeValueObject {
    return momentCustom.preciseDiff(this.momentStart, this.momentEnd, true);
  }

  private getTranslationKey(key: string): VueI18n.TranslateResult {
    return Experience.i18n.t(`experiences.${this.i18nKey}.${key}`)
  }

  private pluralize(key: string, count: number): VueI18n.TranslateResult {
    return Experience.i18n.tc(key, count)
  }
}
