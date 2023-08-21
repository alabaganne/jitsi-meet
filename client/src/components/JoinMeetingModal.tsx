// When a user clicks on the join meeting modal, we want to show a modal that asks for the meeting ID. We can do this by creating a new component called JoinMeetingModal.tsx in the components folder. This component will be a modal that will be shown when the user clicks on the join meeting button. The modal will have an input field for the meeting ID and a button to join the meeting. The component will look like this
import { useState } from "react";

const JoinMeetingModal = () => {
    const [visible, setVisible] = useState(false);
    return <>{visible && <div>Modal content</div>}</>;
};

export default JoinMeetingModal;
