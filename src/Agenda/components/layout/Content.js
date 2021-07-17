import React from 'react'
import { HeaderAgenda } from './HeaderAgenda'
import { SidebarAgenda } from './SidebarAgenda'
import {Tasks} from '../Tasks'

export const ContentAgenda = () => (
<section className='content'>
    <SidebarAgenda />
    <Tasks />
</section>

)
