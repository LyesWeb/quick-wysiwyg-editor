import React from 'react';
import { Button } from '../../atoms/Button';
import { Icon, IconProps } from '../../atoms/Icon';

export interface ToolbarButtonProps {
  icon: IconProps['name'];
  title: string;
  onClick: () => void;
  active?: boolean;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  icon,
  title,
  onClick,
  active = false,
}) => {
  return (
    <Button onClick={onClick} title={title} active={active}>
      <Icon name={icon} size={20} />
    </Button>
  );
};

