import { Link } from "react-router-dom";

const Button = ({ children, to, variant = 'primary', size = 'md', onClick, className }) => {
    const variants = {
        primary: 'bg-amber-500 hover:bg-amber-600 text-white transition-colors shadow-lg',
        outline: 'border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white',
        secondary: 'bg-green-600 hover:bg-green-700 text-white',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    const baseClasses = 'font-semibold rounded-xl transition-all duration-300 inline-block text-center';
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={buttonClasses}>{children}</Link>
        );
    }

    return(
        <button onClick={onClick} className={buttonClasses}>{children}</button>
    );
}

export default Button;