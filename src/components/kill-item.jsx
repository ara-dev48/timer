import PropTypes from "prop-types";

export const KillItem = ({ id, timeEnd, onRestore, timeStart, }) => {
  let timeInSec = (start, end) => {
    let a = +start.slice(0,2)*60 + +start.split(':')[1]
    let b = +end.slice(0,2)*60 + +end.split(':')[1]
    return (a - b)
  }
  return (
    <tr className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-b border-gray-600">
      <td className="px-4 py-2 border border-gray-600">{id}</td>
      <td className="px-4 py-2 border border-gray-600">{timeStart}</td>
      <td className="px-4 py-2 border border-gray-600">{timeEnd}</td>
      <td className="px-4 py-2 border border-gray-600">{timeInSec(timeStart, timeEnd)}</td>
      <td className="px-4 py-2 border border-gray-600">
        <button onClick={() => onRestore(id, timeEnd)}  className="bg-pink-600 hover:bg-purple-400 text-white px-3 py-1 rounded-md shadow-sm transition duration-200">
          Restore
        </button>
      </td>
    </tr>
  );
};

KillItem.propTypes = {
  id: PropTypes.number,
  timeEnd: PropTypes.string
}