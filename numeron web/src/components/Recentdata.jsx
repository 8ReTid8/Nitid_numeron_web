import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { CiAlarmOn } from "react-icons/ci";

function Recentdata() {
    return (
        <DropdownButton title={<CiAlarmOn size="25px"/>} id="bg-nested-dropdown" variant={"dark"}>
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
    );
}
export default Recentdata;