import { observable, computed, autorun } from 'mobx';

class CurrencyAppState {
  @observable renminbi = 0;

  @computed get dollar(){
    return this.renminbi * 6.9432;
  }

  constructor(){
    autorun(() => console.log("人民币：", this.renminbi, "美元：", this.dollar));
  }


}

export default CurrencyAppState;
