function Numpad({ onPress }) {
  const keys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    'Clear', '0', 'Enter'
  ];

  return (
    <div className="max-w-xs mx-auto p-4 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-xl font-bold mb-4 text-center">Numpad</h2>
      <div className="grid grid-cols-3 gap-4">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => onPress?.(key)}
            className="py-4 text-lg font-semibold rounded-xl bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-200 shadow"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Numpad;
