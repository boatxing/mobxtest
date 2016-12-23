import { observable } from 'mobx';

class PriceAppState {
  @observable price = 0;

  @computed get price(){
    return this.price * 7.0;
  }
}

export default PriceAppState;
