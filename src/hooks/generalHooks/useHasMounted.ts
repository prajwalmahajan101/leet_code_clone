import { useEffect, useState } from "react";

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), [hasMounted]);
  return hasMounted;
};

export default useHasMounted;
