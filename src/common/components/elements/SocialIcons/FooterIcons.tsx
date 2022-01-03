import Link from 'next/link';
import {HStack} from '@chakra-ui/react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Twitter from './Twitter';

export default function FooterIcons() {
  return (
    <HStack spacing={2}>
      <Link href="https://www.facebook.com/twomatches">
        <a>
          <Facebook />
        </a>
      </Link>
      <Link href="https://www.instagram.com/twomatchesofficial">
        <a>
          <Instagram />
        </a>
      </Link>
      {/* <Link href="http://www.facebook.com">
        <a>
          <Twitter />
        </a>
      </Link> */}
      {/* <Link href="http://www.facebook.com">
        <a>
          <Linkedin />
        </a>
      </Link> */}
    </HStack>
  );
}
