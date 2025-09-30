function Input({ type, name, children, value, onChange }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <label htmlFor={name} className="w-full md:w-1/4 font-medium text-gray-700 mb-1 md:mb-0">
        {children}
      </label>
      <input className="w-full md:w-3/4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type={type} name={name} id={name} value={value} onChange={onChange} required />
    </div>
  );
}

export default Input;
