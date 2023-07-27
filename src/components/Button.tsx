import className from 'classnames';
import { GoSync } from 'react-icons/go';

type ButtonProps = {
    children: React.ReactNode;
    loading: boolean;
    onClick: () => void;
    [x: string]: string;
};

function Button({
    children,
    onClick,
    loading,
    ...rest
}: ButtonProps) {
    const classes = className(
        rest.className,
        'flex items-center px-3 py-1.5 border h-8',
        'border-blue-500 bg-blue-500 text-white',
        {
            'opacity-80': loading
        }
    );

    return (
        <button onClick={onClick} disabled={loading} className={classes}>
            {loading ? <GoSync className="animate-spin" /> : children}
        </button>
    );
}



export default Button;
