import React from 'react'
import ReactDOM from 'react-dom'
import Member from './member'
import Family from './family'

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Guilherme'  />
        <Member name='Julia'  />
        <Member name='Rafael'  />
    </Family>
, document.getElementById('app'))

