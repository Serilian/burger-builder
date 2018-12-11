import React, {Component} from 'react';
import './BurgerBuilder.scss'


class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
          <>
              <div>Burger with ingredients</div>
              <div>Build Controls</div>
          </>
        );
    }

}

export default BurgerBuilder;