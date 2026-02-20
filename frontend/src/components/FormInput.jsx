const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
}) => {
  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium mb-4">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none"
      />
    
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;