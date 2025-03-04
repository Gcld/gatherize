// import React, { useState, useEffect, useRef } from 'react';
// import { MdArrowDropDown } from "react-icons/md";
// import { LuPlus} from "react-icons/lu"; 
// import SortModal from '../SortModal';

// import { Container, CreateEventButton } from './styled'; 
// import CreateEventModal from '../CreateEventModal';

// export default function EventsFrameAdmin() {
//     const [isSortModalOpen, setIsSortModalOpen] = useState(false);
//     const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
//     const sortButtonRef = useRef<HTMLDivElement>(null);

//     const toggleSortModal = () => {
//         setIsSortModalOpen(!isSortModalOpen);
//     };

//     const handleSort = (sortType: 'alphabetical' | 'recent' | 'participants') => {
//         console.log('Sorting by:', sortType);
//     };

//     const handleCreateEvent = () => {
//         setIsCreateEventModalOpen(true);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 sortButtonRef.current && 
//                 !sortButtonRef.current.contains(event.target as Node)
//             ) {
//                 setIsSortModalOpen(false);
//             }
//         };

//         if (isSortModalOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isSortModalOpen]);

//     return (
//         <Container>
//             <div className="availableEvents">
//                 <h2>Available Events</h2>
//                 <h5>24</h5>
//             </div>
//             <CreateEventButton onClick={handleCreateEvent}>
//                 <LuPlus className="icon" />
//                 <span>Create Event</span>
//             </CreateEventButton>
//             <div className="rightContent">
//                 <div 
//                     ref={sortButtonRef}
//                     className="sortButton" 
//                     onClick={toggleSortModal}
//                     style={{ position: 'relative' }} 
//                 >
//                     <h3>Sort by</h3>
//                     <MdArrowDropDown className="icon"/>
//                     {isSortModalOpen && (
//                         <SortModal 
//                             isOpen={true} 
//                             onClose={() => setIsSortModalOpen(false)}
//                             onSort={handleSort}
//                         />
//                     )}
//                 </div>
//             </div>
//             <CreateEventModal 
//                 isOpen={isCreateEventModalOpen}
//                 onClose={() => setIsCreateEventModalOpen(false)}
//             />
//         </Container>
//     );
// }