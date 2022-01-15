import {Icon} from '@chakra-ui/react';

function Menubar(props: any) {
  return (
    <Icon viewBox="0 0 15 11" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4 0.8H0V0H14.4V0.8ZM0 4.8H14.4V5.6H0V4.8ZM14.4 10.4H0V9.6H14.4V10.4Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default Menubar;
