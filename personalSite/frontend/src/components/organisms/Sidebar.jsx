import { useState } from 'react';
import './sidebar.scss';
import SidebarProjectCard from './SidebarProjectCard';

export default function Sidebar({projectsAPI, editMode, sidebarIsOpen, onSidebarIsOpen, onEditMode, onToggleModal, onSidebarReset, onSubmitForm}) {
    console.log(projectsAPI)

    return (
        <div className='sidebar'>
            <div className={`sidebarOverlay ${sidebarIsOpen ? 'active' : ''}`}>
            </div>
            <aside className={`${!sidebarIsOpen ? 'open' : ''}`}>
                {editMode && <span className='back' onClick={onEditMode}>back</span>}
                <span onClick={onSidebarReset}>X</span>
                <div className='sidebarContent'>
                    {editMode ? (
                        projectsAPI && projectsAPI.map(e => <SidebarProjectCard key={e.id} card={e} onToggleModal={onToggleModal} onSubmitForm={onSubmitForm} />)
                    ) : (
                        <ul>
                            <li onClick={onSidebarIsOpen}>
                                <a href="#first">Mancare</a>
                            </li>
                            <li onClick={onEditMode}>
                                <a>Bautura</a>
                            </li>
                            <li>
                                <a href="">Tigari</a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                    )}
                </div>
            </aside>
        </div>
    );
}