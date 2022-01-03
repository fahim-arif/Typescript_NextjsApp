import * as React from 'react';
import {Icon} from '@chakra-ui/react';

function AnchorIcon(props: any) {
  return (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.61795 4.51336C0.878647 3.62773 0.400024 2.48055 0.400024 0.799988H1.20002C1.20002 2.30693 1.6214 3.26912 2.23209 4.00068C2.79689 4.67726 3.53101 5.17081 4.34094 5.71532C4.43442 5.77817 4.52892 5.8417 4.62429 5.90627C5.52778 6.51801 6.48477 7.21027 7.20616 8.27482C7.34786 8.48392 7.47965 8.70608 7.60002 8.94331V0.799988H8.40002V8.94331C8.5204 8.70608 8.65219 8.48392 8.79389 8.27482C9.51528 7.21027 10.4723 6.51801 11.3758 5.90627C11.4711 5.8417 11.5656 5.77817 11.6591 5.71531C12.469 5.17081 13.2032 4.67726 13.768 4.00068C14.3786 3.26912 14.8 2.30693 14.8 0.799988H15.6C15.6 2.48055 15.1214 3.62773 14.3821 4.51336C13.7392 5.28346 12.9056 5.84274 12.109 6.3771C12.0134 6.44122 11.9184 6.50498 11.8243 6.56871C10.9278 7.17572 10.0848 7.79595 9.45616 8.7236C8.83363 9.64226 8.40002 10.8965 8.40002 12.8V14.2655L11.3157 11.3187L11.8844 11.8813L8.0411 15.7657L4.11867 11.8843L4.68138 11.3157L7.60002 14.2038V12.8C7.60002 10.8965 7.16642 9.64226 6.54389 8.7236C5.91528 7.79595 5.07227 7.17572 4.17576 6.56871C4.08165 6.50498 3.9866 6.44122 3.89102 6.3771C3.09449 5.84273 2.26083 5.28346 1.61795 4.51336Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default AnchorIcon;