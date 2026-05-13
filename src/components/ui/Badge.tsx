interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'red' | 'amber' | 'slate' | 'emerald';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  red: 'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  slate: 'bg-slate-100 text-slate-600',
  emerald: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
};

const sizes = {
  sm: 'text-[10px] px-1.5 py-0.5 font-semibold',
  md: 'text-xs px-2.5 py-1 font-medium',
};

export default function Badge({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
