import { useState } from 'react';
import './sidebar.scss';
import SidebarProjectCard from './SidebarProjectCard';

export default function Sidebar({projectsAPI, editMode, sidebarIsOpen, onSidebarIsOpen, onEditMode, onToggleModal}) {
    console.log(projectsAPI)

    const handleResetSidebar = () => {
        onSidebarIsOpen();
        setTimeout(() => {
            onEditMode()
        }, 600);
    }

    return (
        <div className='sidebar'>
            <div className={`sidebarOverlay ${sidebarIsOpen ? 'active' : ''}`}>
            </div>
            <aside className={`${!sidebarIsOpen ? 'open' : ''}`}>
                {editMode && <span className='back' onClick={onEditMode}>back</span>}
                <span onClick={handleResetSidebar}>X</span>
                <div className='sidebarContent'>
                    {editMode ? (
                        projectsAPI && projectsAPI.map(e => <SidebarProjectCard key={e.id} card={e} onToggleModal={onToggleModal} />)
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