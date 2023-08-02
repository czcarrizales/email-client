import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faReply } from '@fortawesome/free-solid-svg-icons';

interface Id {
  id: any;
}

const CustomButton = ({id}: Id) => {
  const location = useLocation();
  // Function to check if the current pathname is the '/create-message' route
  const isMessageViewRoute = () => {
    return /^\/message-view\/[a-f0-9-]+$/.test(location.pathname);
  };
  const isCreateMessageRoute = () => {
    return location.pathname.startsWith('/create-message');
  }

  // Get the icon based on the current route
  const icon = isMessageViewRoute() ? faReply : faMessage;
  console.log(id)
  return (
    isCreateMessageRoute()
    ?
    (
        <></>
    )
    :
    (
        id
        ? 
        <Link id="btn-fixed" to={`/create-message/${id}`}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </Link>
        :
        <Link id="btn-fixed" className='d-lg-none' to={`/create-message`}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </Link>
    )
  );
};

export default CustomButton;