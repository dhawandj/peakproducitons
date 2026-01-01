
import React from 'react';
import * as Lucide from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 24 }) => {
  const LucideIcon = (Lucide as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} size={size} />;
};
