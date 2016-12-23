import { observable } from 'mobx';

class CurrencyAppState {
  @observable price = 0;
  @observable dollars = 0;

  @computed get dollars(){
    return this.price * 7.0;
  }
}

export default CurrencyAppState;
