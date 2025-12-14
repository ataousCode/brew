const FormField = ({ 
    label, 
    name, 
    type = 'text',
    value, 
    onChange, 
    placeholder,
    error,
    required = false,
    as = 'input',
    options = [],
    rows = 4,
    className = ""
}) => {
    const baseInputClasses = `w-full px-4 py-3 rounded-xl border-2 transition-colors ${
        error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-200 focus:border-green-500'
    } focus:outline-none ${className}`;

    const inputClasses = as === 'select' 
        ? `${baseInputClasses} bg-white`
        : as === 'textarea'
        ? `${baseInputClasses} resize-none`
        : baseInputClasses;

    return (
        <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {as === 'select' ? (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={inputClasses}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : as === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className={inputClasses}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={inputClasses}
                />
            )}
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default FormField;
