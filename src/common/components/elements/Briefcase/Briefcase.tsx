import * as React from 'react';
import {Icon} from '@chakra-ui/react';

function Briefcase(props: any) {
  return (
    <Icon viewBox="0 0 16 15" {...props}>
      <path
        d="M8 5.5998C8.44183 5.5998 8.8 5.95798 8.8 6.3998C8.8 6.84163 8.44183 7.1998 8 7.1998C7.55817 7.1998 7.2 6.84163 7.2 6.3998C7.2 5.95798 7.55817 5.5998 8 5.5998Z"
        fill="#FC2D00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4 0.799805C5.29543 0.799805 4.4 1.69524 4.4 2.7998V3.1998H1.6C0.716344 3.1998 0 3.91615 0 4.7998V12.7998C0 13.6835 0.716345 14.3998 1.6 14.3998H14.4C15.2837 14.3998 16 13.6835 16 12.7998V4.7998C16 3.91615 15.2837 3.1998 14.4 3.1998H11.6V2.7998C11.6 1.69524 10.7046 0.799805 9.6 0.799805H6.4ZM10.8 3.1998V2.7998C10.8 2.13706 10.2627 1.5998 9.6 1.5998H6.4C5.73726 1.5998 5.2 2.13706 5.2 2.7998V3.1998H10.8ZM14.4 3.9998H1.6C1.15817 3.9998 0.8 4.35798 0.8 4.7998V12.7998C0.8 13.2416 1.15817 13.5998 1.6 13.5998H14.4C14.8418 13.5998 15.2 13.2416 15.2 12.7998V4.7998C15.2 4.35798 14.8418 3.9998 14.4 3.9998Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default Briefcase;