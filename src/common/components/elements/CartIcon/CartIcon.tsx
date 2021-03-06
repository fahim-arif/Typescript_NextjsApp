import * as React from 'react';
import {Icon} from '@chakra-ui/react';

function CartIcon(props: any) {
  return (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.424133 0.936725L1.17597 0.66333L1.95295 2.80003H14.9124L13.1124 10H3.71988L0.424133 0.936725ZM2.24386 3.60003L4.28022 9.20003H12.4877L13.8877 3.60003H2.24386Z"
        fill="currentColor"
      />
      <path
        d="M5.20001 12.8C4.75818 12.8 4.40001 13.1582 4.40001 13.6C4.40001 14.0419 4.75818 14.4 5.20001 14.4C5.64184 14.4 6.00001 14.0419 6.00001 13.6C6.00001 13.1582 5.64184 12.8 5.20001 12.8Z"
        fill="currentColor"
      />
      <path
        d="M11.2 12.8C10.7582 12.8 10.4 13.1582 10.4 13.6C10.4 14.0419 10.7582 14.4 11.2 14.4C11.6418 14.4 12 14.0419 12 13.6C12 13.1582 11.6418 12.8 11.2 12.8Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default CartIcon;
