import React from "react";

import './FilterForm.css';

import man from '../../assets/images/mars.png';
import woman from '../../assets/images/venus.png';
import agender from '../../assets/images/agender.png';

class FilterForm extends React.Component {

    handleChange = (e) => {
        this.props.setFilterInfo(e.target);
    }

    render() {
        const {
            searchText,
            male,
            female,
            noGender,
        } = this.props;
        return (
            <div className='filter-form'>
                <div className='input-box'>
                    <input
                        onChange={this.handleChange}
                        value={searchText}
                        type='text' name='filterText'
                        placeholder='Кого шукаємо?'
                        className='filter-form__input'
                    />
                </div>
                <div className='input-box'>
                    <div className='checkbox-block'>
                        <input checked={male} value='male' id='male' onChange={this.handleChange} className='filter-form__checkbox' type='checkbox' name='gender'/>
                        <label className='filter-form__label' htmlFor='male'>
                            <img src={man} className='label-img' alt='male-gender'/>
                        </label>
                    </div>
                    <div className='checkbox-block'>
                        <input checked={female} value='female' id='female' onChange={this.handleChange} className='filter-form__checkbox' type='checkbox' name='gender'/>
                        <label className='filter-form__label' htmlFor='female'>
                            <img src={woman} className='label-img' alt='female-gender'/>
                        </label>
                    </div>
                    <div className='checkbox-block'>
                        <input checked={noGender} value='noGender' id='no-gender' onChange={this.handleChange} className='filter-form__checkbox' type='checkbox' name='gender'/>
                        <label className='filter-form__label' htmlFor='no-gender'>
                            <img src={agender} className='label-img' alt='no-gender'/>
                        </label>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default FilterForm;