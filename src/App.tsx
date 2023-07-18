import { useEffect } from "react";

const App: React.FC = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    Props                                   */
  /* -------------------------------------------------------------------------- */
  const { name } = props;
  /* -------------------------------------------------------------------------- */
  /*           Global Stores Accessing getting values and dispatchers           */
  /* -------------------------------------------------------------------------- */
  const nameSelector = useSelector((state) => state.store);
  /* -------------------------------------------------------------------------- */
  /*                         local states of components                         */
  /* -------------------------------------------------------------------------- */
  const [displayName, setDisplayName] = useState(name);
  /* -------------------------------------------------------------------------- */
  /*                                 useEffects                                 */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setDisplayName(nameSelector);
  }, [nameSelector]);
  /* -------------------------------------------------------------------------- */
  /*                       handlers like Click, Change etc                      */
  /* -------------------------------------------------------------------------- */
  const handleClick = (e: MouseEvent) => {
    setDisplayName(e.target.value);
  };

  return (
    <>
      <input type="text" value={displayName} />
      <button>Submit</button>
    </>
  );
};

export default App;
