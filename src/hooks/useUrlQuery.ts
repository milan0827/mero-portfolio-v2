import { useSearchParams } from "react-router-dom";

type UseUrlQueryType = {
  queryKey: string;
  queryString: string;
};

function useUrlQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setQuery(queryParams: UseUrlQueryType) {
    setSearchParams({ [queryParams.queryKey]: queryParams.queryString });
  }

  function getQuery(key: string): string | null {
    return searchParams.get(key);
  }

  return { setQuery, getQuery };
}

export { useUrlQuery };
