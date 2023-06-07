import '../css/Content.css';
import SidePane from './SidePane';
import Main from './Main';
import RightPane from './RightPane';

function Content() {
    return (
        <>
            <div className='Bodycontainer'>
                <SidePane />
                <Main />
                <RightPane />
            </div>
        </>
    )
}
export default Content