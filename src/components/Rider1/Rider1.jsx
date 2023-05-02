import { Component } from 'react';
import { Controls1 } from './Control1';
import { Progress1 } from './Progress1';
import { Pablication1 } from './Pablication1';

const LS_KEY = 'readef_item_index';

export class ReaderMy extends Component {
  state = {
    index: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE');
    if (prevState.index !== this.state.index) {
      localStorage.setItem('LS_KEY', this.state.index);
    }
  }
  componentDidMount() {
    const savedState = localStorage.getItem('LS_KEY');
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
    // console.log(this.state.index);
  };

  // onPrev = () => {
  //   this.setState(state => ({
  //     index: state.index - 1,
  //   }));
  // };
  // onNext = () => {
  //   this.setState(state => ({
  //     index: state.index + 1,
  //   }));
  // };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];
    // console.log(this.props.items[this.state.index]);

    return (
      <div>
        <Controls1
          total={totalItems}
          currentItem={index + 1}
          onChange={this.changeIndex}
        />
        <Progress1 current={index + 1} total={totalItems} />
        <Pablication1 item={currentItem} />
      </div>
    );
  }
}
