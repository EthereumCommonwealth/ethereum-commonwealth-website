import React, {Component} from 'react';

import {en} from 'src/translations/index';

let langList = [en];


class LangSelector extends Component {
    state = {
        open: false,
        selected: '',
    };


    render() {
        const {selected, open} = this.state;
        return (
            <div className='LangSelector' onClick={e => {this.setState({
                open: !open,
            })}} onMouseLeave={() => {


            }}>
                <div className='LangSelector-selected'>
          <span className='LangSelector-selected-text'>
            <img
                src={`/image/country-flags/${selected}.png`}
                className='LangSelector-flag'
            /> {selected} {open ?
              <i className='fas fa-angle-up'/> : <i className='fas fa-angle-down'/>
          }
          </span>
                </div>
                {open ?
                    (
                        <ul>
                            {langList.map((elem, index) => {
                                if (elem !== selected) {
                                    return (
                                        <li
                                            key={`LangSelector-${index}`}
                                            className='LangSelector-list-elem'
                                        >
                                            <a
                                                className='LangSelector-list-elem-anchor'
                                                onClick={e => {

                                                }}
                                            >
                                                <img
                                                    src={`/image/country-flags/${elem}.png`}
                                                    className='LangSelector-flag'
                                                /> {elem}
                                            </a>
                                        </li>
                                    )
                                }
                                return null
                            })}
                        </ul>
                    ) : null
                }
            </div>
        );
    }
}

export default LangSelector;
