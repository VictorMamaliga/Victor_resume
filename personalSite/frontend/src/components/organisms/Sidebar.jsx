import { useContext } from 'react';

import './sidebar.scss';
import SidebarProjectCard from './SidebarProjectCard';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

export default function Sidebar({projectsAPI, editMode, sidebarIsOpen, onSidebarIsOpen, onEditMode, onToggleModal, onSidebarReset, onSubmitForm}) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleCreateProject = () => {
        dispatch({
          type: 'create',
        });
        
        onToggleModal();
    }

    return (
        <div className='sidebar'>
            <div className={`sidebarOverlay ${sidebarIsOpen ? 'active' : ''}`}></div>
            <aside className={`${!sidebarIsOpen ? 'open' : ''}`}>
                {editMode && <span className='back' onClick={onEditMode}>back</span>}
                <span onClick={onSidebarReset}>X</span>
                <div className='sidebarContent'>
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
                    <div className={`sidebarProjects ${editMode && 'open'}`}>
                        <div className="wrapper">
                            <p className='add-project' onClick={handleCreateProject}>+</p>
                            {projectsAPI && projectsAPI.map(e => <SidebarProjectCard key={e.id} card={e} onToggleModal={onToggleModal} onSubmitForm={onSubmitForm} />)}
                        </div>

                    </div>
                </div>
            </aside>
        </div>
    );
}