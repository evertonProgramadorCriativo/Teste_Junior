import React from 'react'

import Icon from '../../../../../assets/images/slider-seta-bottom.svg'

export default ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
    <Icon className="icon" icon={to} />
  </button>
)