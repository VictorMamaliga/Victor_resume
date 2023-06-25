import './sidebar.scss';

export default function Sidebar({sidebarIsOpen, onSidebarIsOpen}) {

    return (
        <>
        <div className={`sidebarOverlay ${sidebarIsOpen ? 'active' : ''}`}>
        </div>
        <div className={`sidebar ${!sidebarIsOpen ? 'open' : ''}`}>
            <span onClick={onSidebarIsOpen}>X</span>
            <ul>
                <li><a href="">Mancare</a></li>
                <li><a href="">Bautura</a></li>
                <li><a href="">Tigari</a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>
        </>
    );
}