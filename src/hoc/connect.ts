import Block from '../modules/Block';

import store from '../store';

import isEqual from '../utils/isEqual';

export default function connect(mapStateToProps: (state: any) => any) {
  return function wrap(Component: typeof Block) {
    let prevState: any;

    return class WithStore extends Component {
      constructor(props: any) {
        prevState = mapStateToProps(store.getState());

        super({ ...props, ...prevState });

        store.on('changed', () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(prevState, stateProps)) {
            return;
          }
          prevState = stateProps;

          this.setProps({ ...stateProps });
          this.setState({ ...stateProps });
        });
      }
    };
  };
}
