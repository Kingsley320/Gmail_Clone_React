import '../css/RightPane.css';
import calendar from '../assets/calendar.png';
import keep from '../assets/keep.png';
import task from '../assets/tasks.png';
import contact from '../assets/contacts.png';

function RightPane() {
    return (
        <>
            <div className='position-pane'>
                <div className='right-pane'>
                    <div>
                        <img src={calendar} alt="" srcset="" className='calendar' />
                        <img src={keep} alt="" srcset="" className='keep' />
                        <img src={task} alt="" srcset="" className='task' />
                        <img src={contact} alt="" srcset="" className='contact' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='arrow'>
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='add' >
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RightPane