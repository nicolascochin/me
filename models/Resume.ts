import Base from "./Base"
import Me from "./Me"
import Infos from "./Infos";
import Education from "./Education";
import Experiences from "./Experiences";

export default class Resume extends Base {
  private _me!: Me;
  private _infos!: Infos;
  private _education!: Education;
  private _experiences!: Experiences;

  constructor() {
    super()
    this._me = new Me()
    this._infos = new Infos()
    this._education = new Education()
    this._experiences = new Experiences()
  }

  public get me() : Me {
    return this._me;
  }

  public get infos() : Infos {
    return this._infos;
  }

  public get education() : Education {
    return this._education;
  }

  public get experiences() : Experiences {
    return this._experiences;
  }
}
