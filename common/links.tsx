import * as React from 'react';
import {
  IconArrowDownSVG,
  IconArrowLeftSVG,
  IconArrowRightSVG,
  IconCalendarSVG,
  IconCheckSVG,
  IconDeleteSVG,
  IconEmptySVG,
  IconMoonSVG,
  IconSunSVG,
  LogoSVG,
} from './svg-icons';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const icons = {
  arrow: {
    right: (props: IconProps) => <IconArrowRightSVG {...props} />,
    left: (props: IconProps) => <IconArrowLeftSVG {...props} />,
    down: (props: IconProps) => <IconArrowDownSVG {...props} />,
  },
  mode: {
    light: (props: IconProps) => <IconSunSVG {...props} />,
    dark: (props: IconProps) => <IconMoonSVG {...props} />,
  },
  actions: {
    delete: (props: IconProps) => <IconDeleteSVG {...props} />,
    check: (props: IconProps) => <IconCheckSVG {...props} />,
  },
  logo: (props: IconProps) => <LogoSVG {...props} />,
  calendar: (props: IconProps) => <IconCalendarSVG {...props} />,
  empyty: (props: IconProps) => <IconEmptySVG {...props} />,
};
